import React, {ElementType, ReactNode} from 'react';
import {Paper, Typography, CircularProgress} from '@mui/material';
import classNames from 'classnames';

import Button from '@infomat/uikit/src/Button/Button';

import style from './Page.module.scss';

const Page = ({children, label, backLink, isLoading, isMin}: TPageProps) => {
	return (
		<Paper classes={{root: style.container}}>
			<div className={style.scroll}>
				{backLink && (
					<Button variant="outlined" component={backLink}>
						Назад
					</Button>
				)}
				{label && <Typography className={classNames(style.label, {[style.isMin]: isMin})}>{label}</Typography>}
				{isLoading ? (
					<div className={style.boxEmpty}>
						<CircularProgress size={38} />
					</div>
				) : (
					children
				)}
			</div>
		</Paper>
	);
};

type TPageProps = {
	children?: ReactNode;
	label?: string;
	backLink?: ElementType;
	isLoading?: boolean;
	isMin?: boolean;
};

export default Page;
