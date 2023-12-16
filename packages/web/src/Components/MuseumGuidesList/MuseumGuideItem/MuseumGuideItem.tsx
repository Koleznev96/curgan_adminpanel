import React, {useCallback} from 'react';
import {Grid, Typography} from '@mui/material';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import {Icon, IconColor, IconType} from '@infomat/uikit/src/Icon';
import ActionMenuItem from '@infomat/uikit/src/ActionMenu/ActionMenuItem/ActionMenuItem';
import {TMuseumGuideVM} from '@infomat/core/src/Redux/MuseumGuide/entityAdapter';

import useRouterLinkForMui from 'src/Utils/Navigation/useRouterLinkForMui';
import {Routes} from 'src/Routes/Routes';

import style from './MuseumGuideItem.module.scss';

const MuseumGuideItem = ({id, onDelete, objectVM}: TMuseumGuideItemProps) => {
	const ObjectEditLink = useRouterLinkForMui(Routes.museumGuide(objectVM.id));

	const deleteMuseumGuide = useCallback(() => {
		onDelete({id});
	}, [onDelete, id]);

	const statusTitle = objectVM.status === 'DRAFT' ? 'Черновик' : 'Опубликовано';
	const statusIcon = objectVM.status === 'DRAFT' ? IconType.clock : IconType.time;

	return (
		<Grid container className={style.container} direction="row" spacing={1}>
			<Grid item xs={2} md={1.5}>
				<Typography className={style.title}>{objectVM.id}</Typography>
			</Grid>
			<Grid item xs={6} md={7.5}>
				<Typography className={style.title}>{objectVM.title}</Typography>
			</Grid>
			<Grid item container xs={2} md={1}>
				<div className={style.filter}>
					<Icon type={statusIcon} color={IconColor.white} />
					<Typography className={style.title}>{statusTitle}</Typography>
				</div>
			</Grid>
			<Grid item xs={2} md={2} container justifyContent="flex-end">
				<ActionMenuItem editLink={ObjectEditLink} onDelete={deleteMuseumGuide} />
			</Grid>
		</Grid>
	);
};

type TMuseumGuideItemProps = {
	id: number;
	objectVM: TMuseumGuideVM;
	onDelete: PropertyHandler<{id: number}>;
};

export default MuseumGuideItem;
