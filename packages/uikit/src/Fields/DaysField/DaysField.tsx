import React, {useState} from 'react';
import {Typography, Grid} from '@mui/material';
import InputMask from 'react-input-mask';
import _ from 'lodash';

import style from './DaysField.module.scss';
import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import classNames from 'classnames';
import {TAvailabilitie} from '@infomat/core/src/Redux/Service/entityAdapter';
import {Icon, IconSize, IconType} from '../../Icon';

function isValidDate(dateString: string): boolean {
	const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/;
	return timeRegex.test(dateString);
}

const daysConst = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const DaysField = ({value, setValue}: TDaysFieldProps) => {
	const [error, setError] = useState('');
	const [errort, setErrort] = useState('');
	const [isFocus, setIsFocus] = useState(-1);

	const setStatrV = (data: string, index: number) => {
		if (!value) {
			return;
		}

		let newValue = [...value];
		newValue[index].start = data;
		setValue(newValue);
	};

	const setEndV = (data: string, index: number) => {
		if (!value) {
			return;
		}

		let newValue = [...value];
		newValue[index].end = data;
		setValue(newValue);
	};

	const changeStartvalue = (index: number) => {
		setIsFocus(-1);
		let newValue = [...value];

		if (newValue[index].start === '  :  ') {
			setError('');
			newValue[index].start = '';
			return;
		}
		if (isValidDate(newValue[index].start)) {
			setError('');
		} else {
			newValue[index].start = '';
			setError('Не верный формат времени');
		}

		setValue(newValue);
	};

	const changeEndvalue = (index: number) => {
		setIsFocus(-1);
		let newValue = [...value];

		if (newValue[index].end === '  :  ') {
			setErrort('');
			newValue[index].end = '';
			return;
		}
		if (isValidDate(newValue[index].end || '')) {
			setErrort('');
		} else {
			newValue[index].end = '';
			setErrort('Не верный формат времени');
		}

		setValue(newValue);
	};

	const setAv = (index: number) => {
		let newValue = [...value];
		newValue[index].enable = !newValue[index].enable;
		setValue(newValue);
	};

	return (
		<Grid container spacing={3}>
			<Grid item xs={6} md={6}>
				<Typography className={style.label}>{'День недели'}</Typography>
				{_.map(value, (item, index) => (
					<div key={index} className={classNames(style.day, {[style.ok]: item.enable})} onClick={() => setAv(index)}>
						<div className={classNames(style.check, {[style.ok]: item.enable})}>
							{item.enable && <Icon type={IconType.check} size={IconSize.micro} />}
						</div>
						<Typography className={style.text}>{daysConst[index]}</Typography>
					</div>
				))}
			</Grid>
			<Grid item xs={6} md={6}>
				<Typography className={style.label}>{'Время работы'}</Typography>

				{_.map(value, (item, index) => (
					<div
						key={index}
						className={classNames(style.select, {[style.focus]: isFocus === index, [style.ok]: item.enable})}
					>
						<InputMask
							className={style.input}
							placeholder="00:00"
							mask="99:99"
							maskChar=" "
							onFocus={() => setIsFocus(index)}
							onBlur={() => changeStartvalue(index)}
							value={item.start}
							onChange={(e) => setStatrV(e.target.value, index)}
						/>
						<div className={style.sep}>-</div>
						<InputMask
							className={style.input}
							placeholder="00:00"
							mask="99:99"
							maskChar=" "
							value={item.end || ''}
							onFocus={() => setIsFocus(index)}
							onBlur={() => changeEndvalue(index)}
							onChange={(e) => setEndV(e.target.value, index)}
						/>
					</div>
				))}
			</Grid>
			{/* {(error || errort) && <Typography className={style.error}>{error || errort}</Typography>} */}
		</Grid>
	);
};

type TDaysFieldProps = {
	setValue: PropertyHandler<TAvailabilitie[]>;
	value: TAvailabilitie[];
};

export default DaysField;
