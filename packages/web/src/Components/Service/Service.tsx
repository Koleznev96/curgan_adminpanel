import React, {useCallback, useState} from 'react';
import {Grid, Typography} from '@mui/material';
import {isUndefined} from 'lodash';
import _ from 'lodash';
import cuid from 'cuid';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import ButtonWithTooltip from '@infomat/uikit/src/Button/ButtonWithTooltip';
import ButtonDelete from '@infomat/uikit/src/Button/ButtonDelete';
import TextField from '@infomat/uikit/src/Fields/TextField/TextField';
import SelectField from '@infomat/uikit/src/Fields/SelectField/SelectField';
import FileFiledWithPreview from '@infomat/uikit/src/Fields/FileFiledWithPreview/FileFiledWithPreview';
import SwitchLanguageField from '@infomat/uikit/src/Fields/SwitchLanguageField/SwitchLanguageField';
import {TServiceCreate} from '@infomat/core/src/Redux/Service/entityAdapter';
import {TFileCrop, TFrameCrop} from '@infomat/core/src/Types/media';

import style from './Service.module.scss';
import SelectCategoryFieldContainer from '../SelectCategoryField/SelectCategoryFieldContainer';
import GeocodingMapContainer from './GeocodingMap/GeocodingMapContainer';
import {checkUrlsNull} from 'src/Utils/checkFile';
import TextFieldEditor from '@infomat/uikit/src/Fields/TextFieldEditor/TextFieldEditor';
import DaysField from '@infomat/uikit/src/Fields/DaysField/DaysField';

const names = [
	{title: 'Черновик', id: 'DRAFT'},
	{title: 'Опубликован', id: 'PUBLISHED'},
];

const Service = ({onSubmit, onDelete, id, serviceObjectVM}: TServiceProps) => {
	const [title, setTitle] = useState(serviceObjectVM?.title || '');
	const [titleEn, setTitleEn] = useState(serviceObjectVM?.titleEn || '');
	const [categoryId, setCategoryId] = useState(serviceObjectVM?.category?.id || undefined);
	const [status, setStatus] = useState(serviceObjectVM?.status || 'DRAFT');
	const [phone, setPhone] = useState(serviceObjectVM?.phone || '');
	const [email, setEmail] = useState(serviceObjectVM?.email || '');
	const [website, setWebsite] = useState(serviceObjectVM?.website || '');
	const [description, setDescription] = useState(serviceObjectVM?.description || '');
	const [descriptionEn, setDescriptionEn] = useState(serviceObjectVM?.descriptionEn || '');
	const [address, setAddress] = useState(serviceObjectVM?.address || undefined);
	const [frames, setFrames] = useState<TFrameCrop[]>([]);
	const [cover, setCover] = useState<TFileCrop>(serviceObjectVM?.cover || {url3x2: null});
	const [photos, setPhotos] = useState<TFileCrop[]>(serviceObjectVM?.photos || []);
	const [photoIdsForRemoving, setPhotoIdsForRemoving] = useState<number[]>([]);
	const [leng, setLeng] = useState('ru');
	const [coverFrame, setCoverFrame] = useState<TFrameCrop | undefined>(serviceObjectVM?.coverFrame || undefined);
	const [availabilities, setAvailabilities] = useState(
		serviceObjectVM?.availabilities
			? _.cloneDeep(serviceObjectVM?.availabilities)
			: [
					{
						enable: false,
						day: 0,
						start: '',
						end: '',
					},
					{
						enable: false,
						day: 1,
						start: '',
						end: '',
					},
					{
						enable: false,
						day: 2,
						start: '',
						end: '',
					},
					{
						enable: false,
						day: 3,
						start: '',
						end: '',
					},
					{
						enable: false,
						day: 4,
						start: '',
						end: '',
					},
					{
						enable: false,
						day: 5,
						start: '',
						end: '',
					},
					{
						enable: false,
						day: 6,
						start: '',
						end: '',
					},
			  ],
	);

	const titleValue = leng === 'ru' ? title : titleEn;
	const setTitleValue = leng === 'ru' ? setTitle : setTitleEn;
	const descriptionValue = leng === 'ru' ? description : descriptionEn;
	const setDescriptionValue = leng === 'ru' ? setDescription : setDescriptionEn;

	const isDisabledSave =
		checkUrlsNull([cover]) ||
		!title.length ||
		_.isUndefined(address) ||
		!address.address?.length ||
		_.isUndefined(categoryId) ||
		!!_.find(availabilities, (item) => item.enable && (!item.end?.length || !item.start?.length));

	const onSave = useCallback(() => {
		onSubmit({
			id,
			photoIdsForRemoving,
			photos,
			cover,
			frames,
			title,
			titleEn: titleEn.length ? titleEn : undefined,
			description,
			descriptionEn: descriptionEn.length ? descriptionEn : undefined,
			categoryId,
			status,
			phone,
			email,
			website,
			address,
			coverFrame,
			availabilities,
		});
	}, [
		id,
		photoIdsForRemoving,
		photos,
		cover,
		frames,
		title,
		titleEn,
		description,
		descriptionEn,
		categoryId,
		status,
		phone,
		email,
		website,
		onSubmit,
		coverFrame,
		address,
		availabilities,
	]);

	const onAttachAndCrop = useCallback(
		(index: number, file: File | null, crop?: TFrameCrop) => {
			const id = photos[index]?.id;
			if (file === null && !_.isUndefined(id)) {
				const photoIdsForRemovingNew = [...photoIdsForRemoving];
				photoIdsForRemovingNew.push(id);
				setPhotoIdsForRemoving(photoIdsForRemovingNew);
			}
			const videosNew = [...photos];
			if (_.isUndefined(videosNew[index])) {
				do {
					videosNew.push({url3x2: null});
				} while (_.isUndefined(videosNew[index]));
			}
			const partName = cuid();
			videosNew[index] = {url3x2: file, partName: file !== null ? partName : undefined};
			setPhotos(videosNew);

			const framesNew = [...frames];
			if (_.isUndefined(framesNew[index])) {
				do {
					framesNew.push({partName: null});
				} while (_.isUndefined(framesNew[index]));
			}

			if (file !== null && crop) {
				framesNew[index] = {partName, ...crop};
			} else {
				framesNew[index] = {partName: null};
			}
			setFrames(framesNew);
		},
		[setPhotos, photos, photoIdsForRemoving, setPhotoIdsForRemoving, setFrames, frames],
	);

	const onAttachBackground = useCallback(
		(index: number, file: File | null, crop?: TFrameCrop) => {
			setCover({url3x2: file});
			if (file !== null && crop) {
				setCoverFrame({partName: 'cover', ...crop});
			} else {
				setCoverFrame(undefined);
			}
		},
		[setCover],
	);

	return (
		<Grid container spacing={3}>
			<Grid item container xs={12} md={12} direction="row" justifyContent="space-between" alignItems="flex-end">
				<Grid item container alignItems="flex-end" spacing={3} xs={12} md={9}>
					<Grid item xs={12} md={6}>
						<SelectField items={names} value={status} onChange={(e) => setStatus(String(e))} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} md={12}>
				<FileFiledWithPreview
					totalFiles={1}
					isImageAllowed
					onAttachAndCrop={onAttachBackground}
					label="Обложка объекта*"
					files={[cover]}
				/>
			</Grid>
			<Grid item xs={12} md={12}>
				<FileFiledWithPreview
					totalFiles={8}
					isImageAllowed
					onAttachAndCrop={onAttachAndCrop}
					label="Фотографии объекта"
					files={photos}
				/>
			</Grid>
			<Grid item container spacing={1.5}>
				<Grid item container>
					<Typography className={style.label}>Информация о услуге</Typography>
				</Grid>
				<Grid item container>
					<SwitchLanguageField onChange={setLeng} value={leng} />
				</Grid>
			</Grid>
			{/* <Grid item container spacing={3}> */}
			<Grid item container xs={12} md={6} direction="column" gap={1.5}>
				<TextField
					label={leng === 'ru' ? 'Название на русском языке*' : 'Название на английском языке'}
					variant="outlined"
					tabIndex={1}
					onChange={(e) => setTitleValue(e.target.value)}
					value={titleValue}
					placeholder="Название"
				/>
				<TextField
					label={'Номер телефона'}
					variant="outlined"
					type="tel"
					tabIndex={2}
					onChange={(e) => setPhone(e.target.value)}
					value={phone}
					placeholder="Телефон"
				/>
				<TextField
					label={'Почта'}
					variant="outlined"
					tabIndex={3}
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
					placeholder="Почта"
				/>
			</Grid>
			<Grid item container xs={12} md={6} direction="column" gap={1.5}>
				<SelectCategoryFieldContainer
					onChange={setCategoryId}
					value={categoryId}
					label="Категория услуги*"
					placeholder="Гостиницы и отели"
				/>
				<TextField
					label={'Сайт'}
					variant="outlined"
					tabIndex={2}
					onChange={(e) => setWebsite(e.target.value)}
					value={website}
					placeholder="Сайт"
				/>
			</Grid>
			{/* </Grid> */}
			{/* </Grid> */}
			<Grid item container xs={12} md={12}>
				<TextFieldEditor
					label={leng === 'ru' ? 'Описание на русском языке' : 'Описание на английском языке'}
					setValue={setDescriptionValue}
					value={descriptionValue}
					placeholder="Описание"
				/>
			</Grid>
			<Grid item container xs={12} md={12}>
				<DaysField setValue={setAvailabilities} value={availabilities} />
			</Grid>
			<Grid item container xs={12} md={12}>
				{/* <AddressWithMapField /> */}
				<GeocodingMapContainer label="Адрес*" placeholder="Адрес" value={address} setValue={setAddress} />
			</Grid>
			<Grid item container gap={1.5}>
				<ButtonWithTooltip onClick={onSave} disabled={isDisabledSave} tabIndex={3}>
					Сохранить
				</ButtonWithTooltip>
				{!isUndefined(id) && (
					<ButtonDelete onClick={() => onDelete({id})} tabIndex={4}>
						Удалить объект
					</ButtonDelete>
				)}
			</Grid>
		</Grid>
	);
};

type TServiceProps = {
	id?: number;
	serviceObjectVM?: TServiceCreate;
	onSubmit: PropertyHandler<TServiceCreate>;
	onDelete: PropertyHandler<{id: number}>;
};

export default Service;
