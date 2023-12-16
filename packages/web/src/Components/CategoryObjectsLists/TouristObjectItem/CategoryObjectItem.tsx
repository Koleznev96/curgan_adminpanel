import React, {useCallback} from 'react';
import {Grid, Typography} from '@mui/material';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import {Icon, IconColor, IconType} from '@infomat/uikit/src/Icon';
import ActionMenuItem from '@infomat/uikit/src/ActionMenu/ActionMenuItem/ActionMenuItem';

import useRouterLinkForMui from 'src/Utils/Navigation/useRouterLinkForMui';
import {Routes} from 'src/Routes/Routes';

import style from './CategoryObjectItem.module.scss';
import {TCategoryObjectVM} from '@infomat/core/src/Redux/CategoryObject/entityAdapter';

const CategoryObjectItem = ({id, onDelete, itemVM}: TCategoryObjectItemProps) => {
	const ObjectEditLink = useRouterLinkForMui(Routes.categoryServices(itemVM.id));

	const deletePlaces = useCallback(() => {
		onDelete({id});
	}, [onDelete, id]);

	return (
		<Grid container className={style.container} direction="row" spacing={1}>
			<Grid
				item
				xs={1}
				md={1}
				// container justifyContent="center"
			>
				<div className={style.boxIcon}>
					<img src={itemVM.icon.url} className={style.iconG} />
				</div>
			</Grid>
			<Grid item xs={2} md={1.5} container>
				<img src={itemVM.cover.url3x2} className={style.img} />
			</Grid>
			<Grid item xs={5} md={7.5}>
				<Typography className={style.title}>{itemVM.title}</Typography>
			</Grid>
			<Grid item xs={2} md={2} container justifyContent="flex-end">
				<ActionMenuItem editLink={ObjectEditLink} onDelete={deletePlaces} />
			</Grid>
		</Grid>
	);
};

type TCategoryObjectItemProps = {
	id: number;
	itemVM: TCategoryObjectVM;
	onDelete: PropertyHandler<{id: number}>;
};

export default CategoryObjectItem;
