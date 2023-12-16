import React, {useCallback} from 'react';
import {Grid, Typography} from '@mui/material';
import _ from 'lodash';

import {Icon, IconSize, IconType} from '@infomat/uikit/src/Icon';
import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import PageListIteration from '@infomat/uikit/src/PageListIteration/PageListIteration';
import FilterMenuItem from '@infomat/uikit/src/ActionMenu/FilterMenuItem/FilterMenuItem';

import useRouterLinkForMui from 'src/Utils/Navigation/useRouterLinkForMui';
import {Routes} from 'src/Routes/Routes';

import style from './AudioGuidesList.module.scss';
import AudioGuideItemContainer from './AudioGuideItem/AudioGuideItemContainer';

const AudioGuidesList = ({
	getData,
	serviceIds,
	currentPage,
	totalPage,
	size,
	isLoading,
	search,
	status,
}: TAudioGuidesListProps) => {
	const ObjectCreateLink = useRouterLinkForMui(Routes.audioGuide());

	const wrapperGetData = useCallback(
		({restFilters, ...data}: {page?: number; size?: number; search?: string; restFilters?: boolean}) => {
			if (restFilters === true) {
				getData({...data, status: null});
			} else {
				getData(data);
			}
		},
		[getData],
	);

	const onAscStatus = useCallback(() => {
		getData({status: 'PUBLISHED', page: 0, search: ''});
	}, [getData]);

	const onDecStatus = useCallback(() => {
		getData({status: 'DRAFT', page: 0, search: ''});
	}, [getData]);

	const onResetStatus = useCallback(() => {
		getData({status: null, page: 0});
	}, [getData]);

	return (
		<PageListIteration
			numberPages={totalPage}
			startSearch={search}
			isLoading={isLoading}
			isEmptyList={_.isEmpty(serviceIds)}
			getData={wrapperGetData}
			labelAdd="Добавить аудио-гид"
			addLink={ObjectCreateLink}
			startCrrentPageNumber={currentPage}
			startValueLimit={size}
		>
			<Grid container className={style.table} direction="column">
				<Grid item container className={style.header}>
					<Grid item xs={2} md={1.5}>
						<Typography className={style.title}>ID</Typography>
					</Grid>
					<Grid item xs={6} md={7.5}>
						<Typography className={style.title}>Название</Typography>
					</Grid>
					<Grid item container xs={2} md={1}>
						<FilterMenuItem
							isReset={!!(!_.isUndefined(status) && status !== null && status.length)}
							title={'Статус'}
							onAsc={onAscStatus}
							onDec={onDecStatus}
							onReset={onResetStatus}
						/>
					</Grid>
					<Grid item xs={2} md={2}></Grid>
				</Grid>
				<div className={style.container}>
					{_.map(serviceIds, (id) => (
						<AudioGuideItemContainer key={id} id={id} />
					))}
				</div>
			</Grid>
		</PageListIteration>
	);
};

type TAudioGuidesListProps = {
	serviceIds?: number[];
	currentPage: number;
	isLoading?: boolean;
	search: string;
	size: number;
	totalPage: number;
	error?: string;
	status?: string | null;
	getData: PropertyHandler<{
		page?: number;
		size?: number;
		search?: string;
		status?: string | null;
	}>;
};

export default AudioGuidesList;
