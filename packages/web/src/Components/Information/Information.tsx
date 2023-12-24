import React from 'react';
import {Grid, Typography} from '@mui/material';

import Button from '@infomat/uikit/src/Button/Button';

import {Routes} from 'src/Routes/Routes';
import InfomatLogo from 'src/Assets/Images/icons/logo.svg';
import ProfileContainer from 'src/Components/Profile/ProfileContainer';
import useRouterLinkForMui from 'src/Utils/Navigation/useRouterLinkForMui';

import style from './Information.module.scss';

const Information = () => {
	const StatisticsLink = useRouterLinkForMui(Routes.statistics);

	return (
		<Grid container direction="row" justifyContent="space-between" alignItems="center" paddingBottom={3}>
			<Grid item alignItems="center" gap={2.5} className={style.wrapper}>
				<Button component={StatisticsLink} className={style.button}>
					<img src={InfomatLogo} alt="Infomat Logo" className={style.logo} />
				</Button>
				<Typography className={style.title}>Панель управления </Typography>
			</Grid>
			<Grid item>
				<ProfileContainer />
			</Grid>
		</Grid>
	);
};

export default Information;
