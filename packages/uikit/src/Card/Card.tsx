import React, {ReactNode} from 'react';
import {Typography} from '@mui/material';
import classNames from 'classnames';

import style from './Card.module.scss';

const Card = ({label, children, isFull}: TCardProps) => {
	return (
		<div className={classNames(style.card, {[style.isFull]: isFull})}>
			{label && <Typography className={classNames(style.label, {[style.isFull]: isFull})}>{label}</Typography>}
			<div style={{width: '100%'}}>{children}</div>
		</div>
	);
};

export type TCardProps = {
	children?: ReactNode;
	label?: string;
	isFull?: boolean;
};

export default Card;
