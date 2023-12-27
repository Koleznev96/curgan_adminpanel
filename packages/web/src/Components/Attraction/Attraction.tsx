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
import {TPlacesCreate} from '@infomat/core/src/Redux/Places/entityAdapter';
import {TFileCrop, TFrameCrop} from '@infomat/core/src/Types/media';

import style from './Attraction.module.scss';
import GeocodingMapContainer from '../Service/GeocodingMap/GeocodingMapContainer';
import {checkUrlsNull} from 'src/Utils/checkFile';
import TextFieldEditor from '@infomat/uikit/src/Fields/TextFieldEditor/TextFieldEditor';

const names = [
	{title: 'Черновик', id: 'DRAFT'},
	{title: 'Опубликован', id: 'PUBLISHED'},
];

const Attraction = ({onSubmit, onDelete, id, placesObjectVM}: TAttractionProps) => {
	const [title, setTitle] = useState(placesObjectVM?.title || '');
	const [titleEn, setTitleEn] = useState(placesObjectVM?.titleEn || '');
	const [status, setStatus] = useState(placesObjectVM?.status || 'DRAFT');
	const [description, setDescription] = useState(placesObjectVM?.description || '');
	const [descriptionEn, setDescriptionEn] = useState(placesObjectVM?.descriptionEn || '');
	const [address, setAddress] = useState(placesObjectVM?.address || undefined);
	const [frames, setFrames] = useState<TFrameCrop[]>([]);
	const [cover, setCover] = useState<TFileCrop>(placesObjectVM?.cover || {url3x2: null});
	const [photos, setPhotos] = useState<TFileCrop[]>(placesObjectVM?.photos || []);
	const [photoIdsForRemoving, setPhotoIdsForRemoving] = useState<number[]>([]);
	const [leng, setLeng] = useState('ru');
	const [coverFrame, setCoverFrame] = useState<TFrameCrop | undefined>(placesObjectVM?.coverFrame || undefined);

	const titleValue = leng === 'ru' ? title : titleEn;
	const setTitleValue = leng === 'ru' ? setTitle : setTitleEn;
	const descriptionValue = leng === 'ru' ? description : descriptionEn;
	const setDescriptionValue = leng === 'ru' ? setDescription : setDescriptionEn;

	const isDisabledSave = checkUrlsNull([cover]) || !title.length || _.isUndefined(address) || !address.address?.length;

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
			status,
			address,
			coverFrame,
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
		status,
		onSubmit,
		coverFrame,
		address,
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
				<Grid item container alignItems="flex-end" xs={12} md={9}>
					<Grid item container alignItems="flex-end" xs={12} md={4}>
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
					<Typography className={style.label}>Информация об объекте</Typography>
				</Grid>
				<Grid item container>
					<SwitchLanguageField onChange={setLeng} value={leng} />
				</Grid>
				<Grid item container xs={12} md={6} direction="column" gap={1.5}>
					<TextField
						label={leng === 'ru' ? 'Название на русском языке*' : 'Название на английском языке'}
						variant="outlined"
						tabIndex={1}
						onChange={(e) => setTitleValue(e.target.value)}
						value={titleValue}
						placeholder="Название"
					/>
				</Grid>
			</Grid>
			<Grid item container xs={12} md={12}>
				<TextFieldEditor
					key={leng}
					label={leng === 'ru' ? 'Описание (русский язык)' : 'Описание (английский язык)'}
					setValue={setDescriptionValue}
					value={descriptionValue}
					placeholder="Описание"
				/>
			</Grid>
			<Grid item container xs={12} md={12}>
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

type TAttractionProps = {
	id?: number;
	placesObjectVM?: TPlacesCreate;
	onSubmit: PropertyHandler<TPlacesCreate>;
	onDelete: PropertyHandler<{id: number}>;
};

export default Attraction;
