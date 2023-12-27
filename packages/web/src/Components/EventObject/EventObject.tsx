import React, {useCallback, useState} from 'react';
import {Grid, Typography} from '@mui/material';
import {isUndefined} from 'lodash';
import {type Crop} from 'react-image-crop';
import _ from 'lodash';
import cuid from 'cuid';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import ButtonWithTooltip from '@infomat/uikit/src/Button/ButtonWithTooltip';
import ButtonDelete from '@infomat/uikit/src/Button/ButtonDelete';
import TextField from '@infomat/uikit/src/Fields/TextField/TextField';
import SelectField from '@infomat/uikit/src/Fields/SelectField/SelectField';
import FileFiledWithPreview from '@infomat/uikit/src/Fields/FileFiledWithPreview/FileFiledWithPreview';
import SwitchLanguageField from '@infomat/uikit/src/Fields/SwitchLanguageField/SwitchLanguageField';
import {TEventsCreate} from '@infomat/core/src/Redux/Events/entityAdapter';
import {TFileCrop, TFrameCrop} from '@infomat/core/src/Types/media';
import DateRangField from '@infomat/uikit/src/Fields/DateRangField/DateRangField';
import TimeRangField from '@infomat/uikit/src/Fields/TimeRangField/TimeRangField';

import style from './EventObject.module.scss';
import GeocodingMapContainer from '../Service/GeocodingMap/GeocodingMapContainer';
import {checkUrlsNull} from 'src/Utils/checkFile';
import TextFieldEditor from '@infomat/uikit/src/Fields/TextFieldEditor/TextFieldEditor';

const names = [
	{title: 'Черновик', id: 'DRAFT'},
	{title: 'Опубликован', id: 'PUBLISHED'},
];

const EventObject = ({onSubmit, onDelete, id, eventsObjectVM}: TEventObjectProps) => {
	const [title, setTitle] = useState(eventsObjectVM?.title || '');
	const [titleEn, setTitleEn] = useState(eventsObjectVM?.titleEn || '');
	const [status, setStatus] = useState(eventsObjectVM?.status || 'DRAFT');
	const [description, setDescription] = useState(eventsObjectVM?.description || '');
	const [descriptionEn, setDescriptionEn] = useState(eventsObjectVM?.descriptionEn || '');
	const [address, setAddress] = useState(eventsObjectVM?.address || undefined);
	const [frames, setFrames] = useState<TFrameCrop[]>([]);
	const [cover, setCover] = useState<TFileCrop>(eventsObjectVM?.cover || {url3x2: null});
	const [photos, setPhotos] = useState<TFileCrop[]>(eventsObjectVM?.photos || []);
	const [photoIdsForRemoving, setPhotoIdsForRemoving] = useState<number[]>([]);
	const [leng, setLeng] = useState('ru');
	const [coverFrame, setCoverFrame] = useState<TFrameCrop | undefined>(eventsObjectVM?.coverFrame || undefined);
	const [startDate, setstartDate] = useState(eventsObjectVM?.startDate || '');
	const [endDate, setendDate] = useState(eventsObjectVM?.endDate || '');
	const [startTime, setstartTime] = useState(eventsObjectVM?.startTime || '');
	const [endTime, setendTime] = useState(eventsObjectVM?.endTime || '');

	const titleValue = leng === 'ru' ? title : titleEn;
	const setTitleValue = leng === 'ru' ? setTitle : setTitleEn;
	const descriptionValue = leng === 'ru' ? description : descriptionEn;
	const setDescriptionValue = leng === 'ru' ? setDescription : setDescriptionEn;

	const isDisabledSave =
		checkUrlsNull([cover]) ||
		!title.length ||
		_.isUndefined(address) ||
		!address.address?.length ||
		!startDate.length ||
		!startTime.length;

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
			startDate,
			startTime,
			endDate: endDate.length ? endDate : undefined,
			endTime: endTime.length ? endTime : undefined,
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
		startDate,
		startTime,
		endDate,
		endTime,
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
					<Typography className={style.label}>Информация о событии</Typography>
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
				<Grid item container spacing={3}>
					<Grid item container xs={12} md={6} direction="column" gap={1.5}>
						<DateRangField
							label="Дата проведения события*"
							startValue={startDate}
							endValue={endDate}
							setEndValue={setendDate}
							setStartValue={setstartDate}
						/>
					</Grid>
					<Grid item container xs={12} md={6} direction="column" gap={1.5}>
						<TimeRangField
							label="Время проведения события*"
							startValue={startTime}
							endValue={endTime}
							setEndValue={setendTime}
							setStartValue={setstartTime}
						/>
					</Grid>
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

type TEventObjectProps = {
	id?: number;
	eventsObjectVM?: TEventsCreate;
	onSubmit: PropertyHandler<TEventsCreate>;
	onDelete: PropertyHandler<{id: number}>;
};

export default EventObject;
