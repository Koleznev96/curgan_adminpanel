import React, {useCallback} from 'react';
import {Grid, Typography} from '@mui/material';
import _ from 'lodash';

import {Icon, IconSize, IconType} from '@infomat/uikit/src/Icon';
import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import PageListIteration from '@infomat/uikit/src/PageListIteration/PageListIteration';
import FilterMenuItem from '@infomat/uikit/src/ActionMenu/FilterMenuItem/FilterMenuItem';

import useRouterLinkForMui from 'src/Utils/Navigation/useRouterLinkForMui';
import {Routes} from 'src/Routes/Routes';

import style from './ServicesList.module.scss';
import ServiceItemContainer from './ServiceItem/ServiceItemContainer';
import SelectCategoryFieldContainer from '../SelectCategoryField/SelectCategoryFieldContainer';

const ServicesList = ({
	getData,
	serviceIds,
	currentPage,
	totalPage,
	size,
	isLoading,
	search,
	subcategoryId,
	status,
}: TServicesListProps) => {
	const ObjectCreateLink = useRouterLinkForMui(Routes.service());

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

	const onFilterSubcategory = useCallback(
		(value: number) => {
			getData({page: 0, subcategoryId: value});
		},
		[getData],
	);

	const onResetFilterSubcategory = useCallback(() => {
		getData({page: 0, subcategoryId: null});
	}, [getData]);

	return (
		<PageListIteration
			numberPages={totalPage}
			startSearch={search}
			isLoading={isLoading}
			isEmptyList={_.isEmpty(serviceIds)}
			getData={wrapperGetData}
			labelAdd="Добавить услугу"
			addLink={ObjectCreateLink}
			startCrrentPageNumber={currentPage}
			startValueLimit={size}
			FilterComponent={
				<div className={style.filter}>
					<div className={style.select}>
						<SelectCategoryFieldContainer
							onChange={onFilterSubcategory}
							value={subcategoryId === null ? undefined : subcategoryId}
							placeholder="Категория сервиса"
						/>
					</div>
					{subcategoryId !== null && !_.isUndefined(subcategoryId) && (
						<div onClick={onResetFilterSubcategory} className={style.resetButton}>
							<Icon type={IconType.close} size={IconSize.tiny} />
						</div>
					)}
				</div>
			}
		>
			<Grid container className={style.table} direction="column">
				<Grid item container className={style.header}>
					<Grid item xs={1} md={0.5}>
						<Typography className={style.title}>ID</Typography>
					</Grid>
					<Grid item xs={2} md={1.5}></Grid>
					<Grid item xs={5} md={7}>
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
						<ServiceItemContainer key={id} id={id} />
					))}
				</div>
			</Grid>
		</PageListIteration>
	);
};

type TServicesListProps = {
	serviceIds?: number[];
	currentPage: number;
	isLoading?: boolean;
	search: string;
	size: number;
	totalPage: number;
	error?: string;
	status?: string | null;
	subcategoryId?: number | null;
	getData: PropertyHandler<{
		page?: number;
		size?: number;
		search?: string;
		status?: string | null;
		subcategoryId?: number | null;
	}>;
};

export default ServicesList;
