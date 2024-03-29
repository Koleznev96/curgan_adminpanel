import React from 'react';
import {FormControlLabel, SwitchProps, Switch} from '@mui/material';
import {styled} from '@mui/material/styles';

import style from './SwitchField.module.scss';

const IOSSwitch = styled((props: SwitchProps) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({theme}) => ({
	width: 44,
	height: 22,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 2,
		transitionDuration: '300ms',
		'&.Mui-checked': {
			transform: 'translateX(22px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
				opacity: 1,
				border: 0,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#33cf4d',
			border: '6px solid #fff',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {
			color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
		},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: 0.7,
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 18,
		height: 18,
	},
	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		backgroundColor: '#E2E8F0',
		opacity: 1,
		transition: theme.transitions.create(['background-color'], {
			duration: 500,
		}),
	},
}));

const SwitchField = ({label, ...restProps}: TSwitchFieldProps) => {
	return <FormControlLabel className={style.switch} control={<IOSSwitch sx={{m: 1}} {...restProps} />} label={label} />;
};

type TSwitchFieldProps = SwitchProps & {
	label?: string;
};

export default SwitchField;
