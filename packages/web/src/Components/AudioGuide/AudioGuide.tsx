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
import {TAudioGuideCreate} from '@infomat/core/src/Redux/AudioGuide/entityAdapter';
import {TFileCrop, TFrameCrop} from '@infomat/core/src/Types/media';
import TextFieldEditor from '@infomat/uikit/src/Fields/TextFieldEditor/TextFieldEditor';

import {checkUrlsNull} from 'src/Utils/checkFile';

import style from './AudioGuide.module.scss';
import GeocodingMapContainer from '../Service/GeocodingMap/GeocodingMapContainer';
import ItemRoutesMapContainer from '../ItemRoutesMap/ItemRoutesMapContainer';

const names = [
	{title: 'Черновик', id: 'DRAFT'},
	{title: 'Опубликован', id: 'PUBLISHED'},
];

const AudioGuide = ({onSubmit, onDelete, id, audioGuideObjectVM}: TAudioGuideProps) => {
	const [title, setTitle] = useState(audioGuideObjectVM?.title || '');
	const [titleEn, setTitleEn] = useState(audioGuideObjectVM?.titleEn || '');
	const [status, setStatus] = useState(audioGuideObjectVM?.status || 'DRAFT');
	const [description, setDescription] = useState(audioGuideObjectVM?.description || '');
	const [descriptionEn, setDescriptionEn] = useState(audioGuideObjectVM?.descriptionEn || '');
	const [polygon, setPolygon] = useState(audioGuideObjectVM?.polygon || undefined);
	const [audio, setAudio] = useState(audioGuideObjectVM?.audio || {url: null});
	const [leng, setLeng] = useState('ru');

	const titleValue = leng === 'ru' ? title : titleEn;
	const setTitleValue = leng === 'ru' ? setTitle : setTitleEn;
	const descriptionValue = leng === 'ru' ? description : descriptionEn;
	const setDescriptionValue = leng === 'ru' ? setDescription : setDescriptionEn;

	const isDisabledSave = audio?.url === null || audio?.url === undefined || !title.length || !polygon;

	const onSave = useCallback(() => {
		onSubmit({
			id,
			polygon: polygon ? [...polygon, {lat: polygon[0].lat, lon: polygon[0].lon}] : polygon,
			title,
			titleEn: titleEn.length ? titleEn : undefined,
			description,
			descriptionEn: descriptionEn.length ? descriptionEn : undefined,
			status,
			audio,
		});
	}, [id, audio, polygon, title, titleEn, description, descriptionEn, status, onSubmit]);

	const onAttach = useCallback(
		(index: number, file: File | null) => {
			setAudio({url: file});
		},
		[setAudio],
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
					isAudioAllowed
					onAttach={onAttach}
					label="Аудиозапись гида*"
					files={[audio]}
				/>
			</Grid>
			<Grid item container spacing={1.5}>
				<Grid item container>
					<Typography className={style.label}>Информация об аудио-гиде</Typography>
				</Grid>
				<Grid item container>
					<SwitchLanguageField onChange={setLeng} value={leng} />
				</Grid>
				<Grid item container xs={12} md={6} direction="column" gap={1.5}>
					<TextField
						label={leng === 'ru' ? 'Заголовок (русский язык)*' : 'Заголовок (английский язык)'}
						variant="outlined"
						tabIndex={1}
						onChange={(e) => setTitleValue(e.target.value)}
						value={titleValue}
						placeholder="Заголовок аудио-гида"
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
				<ItemRoutesMapContainer label="Полигон*" value={polygon} setValue={setPolygon} />
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

type TAudioGuideProps = {
	id?: number;
	audioGuideObjectVM?: TAudioGuideCreate;
	onSubmit: PropertyHandler<TAudioGuideCreate>;
	onDelete: PropertyHandler<{id: number}>;
};

export default AudioGuide;
