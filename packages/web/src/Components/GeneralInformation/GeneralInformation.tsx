import React, {useCallback, useState} from 'react';
import {Grid} from '@mui/material';
import _ from 'lodash';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import ButtonWithTooltip from '@infomat/uikit/src/Button/ButtonWithTooltip';
import TextField from '@infomat/uikit/src/Fields/TextField/TextField';
import TextFieldEditor from '@infomat/uikit/src/Fields/TextFieldEditor/TextFieldEditor';
import {TInformationVM} from '@infomat/core/src/Redux/Information/type';
import SwitchLanguageField from '@infomat/uikit/src/Fields/SwitchLanguageField/SwitchLanguageField';

import style from './GeneralInformation.module.scss';

const GeneralInformation = ({onSubmit, data}: TGeneralInformationProps) => {
	const [name, setName] = useState(data?.name || '');
	const [nameEn, setNameEn] = useState(data?.nameEn || '');
	const [history, setHistory] = useState(data?.history || '');
	const [historyEn, setHistoryEn] = useState(data?.historyEn || '');
	const [leng, setLeng] = useState('ru');

	const isDisabledSave = !name.length || !nameEn.length;

	const nameValue = leng === 'ru' ? name : nameEn;
	const setNameValue = leng === 'ru' ? setName : setNameEn;
	const historyValue = leng === 'ru' ? history : historyEn;
	const setHistoryValue = leng === 'ru' ? setHistory : setHistoryEn;

	const onSave = useCallback(() => {
		onSubmit({
			name,
			nameEn,
			history,
			historyEn,
		});
	}, [name, nameEn, history, historyEn, onSubmit]);

	return (
		<Grid container spacing={3}>
			<Grid item container xs={12} md={12}>
				<SwitchLanguageField onChange={setLeng} value={leng} />
			</Grid>
			<Grid item xs={12} md={6}>
				<TextField
					label={
						leng === 'ru'
							? 'Заголовок на главном экране (русский язык)*'
							: 'Заголовок на главном экране (английский язык)'
					}
					variant="outlined"
					tabIndex={2}
					onChange={(e) => setNameValue(e.target.value)}
					value={nameValue}
					placeholder="Заголовок"
					className={style.marginBottom}
				/>
			</Grid>
			<Grid item xs={12} md={12}>
				<TextFieldEditor
					label={leng === 'ru' ? 'Описание (русский язык)*' : 'Описание (английский язык)'}
					setValue={setHistoryValue}
					value={historyValue}
					placeholder="Заголовок"
					height={250}
					isImage
				/>
			</Grid>
			<Grid item>
				<ButtonWithTooltip onClick={onSave} disabled={isDisabledSave} tabIndex={4}>
					Сохранить
				</ButtonWithTooltip>
			</Grid>
		</Grid>
	);
};

type TGeneralInformationProps = {
	data?: TInformationVM;
	onSubmit: PropertyHandler<TInformationVM & {videoIdsForRemoving?: number[]}>;
	error?: string;
};

export default GeneralInformation;
