import React, {useCallback, useState} from 'react';
import {Grid, Typography} from '@mui/material';
import {isUndefined} from 'lodash';
import _ from 'lodash';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import ButtonWithTooltip from '@infomat/uikit/src/Button/ButtonWithTooltip';
import ButtonDelete from '@infomat/uikit/src/Button/ButtonDelete';
import TextField from '@infomat/uikit/src/Fields/TextField/TextField';
import SelectField from '@infomat/uikit/src/Fields/SelectField/SelectField';
import SwitchLanguageField from '@infomat/uikit/src/Fields/SwitchLanguageField/SwitchLanguageField';
import {TMuseumGuideCreate} from '@infomat/core/src/Redux/MuseumGuide/entityAdapter';
import TextFieldEditor from '@infomat/uikit/src/Fields/TextFieldEditor/TextFieldEditor';
import QRField from '@infomat/uikit/src/Fields/QRField/QRField';

import style from './MuseumGuide.module.scss';

const names = [
	{title: 'Черновик', id: 'DRAFT'},
	{title: 'Опубликован', id: 'PUBLISHED'},
];

// Получаем текущий URL
const currentUrl = window.location.href;

// Обрабатываем текущий URL, чтобы получить основной URL
const parsedUrl = new URL(currentUrl);
const baseUrl = parsedUrl.origin;

const isDevUrl = baseUrl === 'http://localhost:3000' ? 'http://b8316e2e003.vps.myjino.ru/api' : `${baseUrl}/api`;

const MuseumGuide = ({onSubmit, onDelete, id, museumGuideObjectVM}: TMuseumGuideProps) => {
	const [title, setTitle] = useState(museumGuideObjectVM?.title || '');
	const [titleEn, setTitleEn] = useState(museumGuideObjectVM?.titleEn || '');
	const [status, setStatus] = useState(museumGuideObjectVM?.status || 'DRAFT');
	const [description, setDescription] = useState(museumGuideObjectVM?.description || '');
	const [descriptionEn, setDescriptionEn] = useState(museumGuideObjectVM?.descriptionEn || '');
	const [leng, setLeng] = useState('ru');

	const titleValue = leng === 'ru' ? title : titleEn;
	const setTitleValue = leng === 'ru' ? setTitle : setTitleEn;
	const descriptionValue = leng === 'ru' ? description : descriptionEn;
	const setDescriptionValue = leng === 'ru' ? setDescription : setDescriptionEn;

	const isDisabledSave = !title.length || !description.length;

	const onSave = useCallback(() => {
		onSubmit({
			id,
			title,
			titleEn: titleEn.length ? titleEn : undefined,
			description,
			descriptionEn: descriptionEn.length ? descriptionEn : undefined,
			status,
		});
	}, [id, title, titleEn, description, descriptionEn, status, onSubmit]);

	return (
		<Grid container spacing={3}>
			<Grid item container xs={12} md={12} direction="row" justifyContent="space-between" alignItems="flex-end">
				<Grid item container alignItems="flex-end" xs={12} md={9}>
					<Grid item container alignItems="flex-end" xs={12} md={4}>
						<SelectField items={names} value={status} onChange={(e) => setStatus(String(e))} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item container>
				<QRField url={_.isUndefined(id) ? undefined : museumGuideObjectVM?.url} />
			</Grid>
			<Grid item container spacing={1.5}>
				<Grid item container>
					<Typography className={style.label}>Информация об музейном гиде</Typography>
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
					label={leng === 'ru' ? 'Описание (русский язык)*' : 'Описание (английский язык)'}
					setValue={setDescriptionValue}
					value={descriptionValue}
					placeholder="Описание"
				/>
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

type TMuseumGuideProps = {
	id?: number;
	museumGuideObjectVM?: TMuseumGuideCreate;
	onSubmit: PropertyHandler<TMuseumGuideCreate>;
	onDelete: PropertyHandler<{id: number}>;
};

export default MuseumGuide;
