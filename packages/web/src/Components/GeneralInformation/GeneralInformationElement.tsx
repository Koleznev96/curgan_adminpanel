import React, {useCallback, useState} from 'react';
import {Grid} from '@mui/material';
import _ from 'lodash';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import ButtonWithTooltip from '@infomat/uikit/src/Button/ButtonWithTooltip';
import TextFieldEditor from '@infomat/uikit/src/Fields/TextFieldEditor/TextFieldEditor';
import {TInformationElementVM} from '@infomat/core/src/Redux/Information/type';
import SwitchLanguageField from '@infomat/uikit/src/Fields/SwitchLanguageField/SwitchLanguageField';

import style from './GeneralInformation.module.scss';
import {EnumInfoType} from '@infomat/core/src/BusinessLogic/EnumInfoType';

const GeneralInformationElement = ({onSubmit, data, type}: TGeneralInformationElementProps) => {
	const [info, setInfo] = useState(data?.info || '');
	const [infoEn, setInfoEn] = useState(data?.infoEn || '');
	const [leng, setLeng] = useState('ru');

	const isDisabledSave = !info.length;

	const infoValue = leng === 'ru' ? info : infoEn;
	const setInfoValue = leng === 'ru' ? setInfo : setInfoEn;

	const onSave = useCallback(() => {
		onSubmit({
			info,
			infoEn,
			type: type,
		});
	}, [info, infoEn, type, onSubmit]);

	return (
		<Grid container spacing={3}>
			<Grid item container xs={12} md={12}>
				<SwitchLanguageField onChange={setLeng} value={leng} />
			</Grid>
			<Grid item xs={12} md={12}>
				<TextFieldEditor
					label={leng === 'ru' ? 'Описание (русский язык)*' : 'Описание (английский язык)'}
					setValue={setInfoValue}
					value={infoValue}
					placeholder="Заголовок"
					height={250}
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

type TGeneralInformationElementProps = {
	data?: TInformationElementVM;
	onSubmit: PropertyHandler<TInformationElementVM & {type: EnumInfoType}>;
	error?: string;
	type: EnumInfoType;
};

export default GeneralInformationElement;
