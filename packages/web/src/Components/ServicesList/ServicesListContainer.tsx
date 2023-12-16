import React from 'react';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {selectErrorService} from '@infomat/core/src/Redux/Service/Selectors/selectErrorService';
import {selectServiceTotalPages} from '@infomat/core/src/Redux/Service/Selectors/selectServiceTotalPages';
import {selectServiceSizePage} from '@infomat/core/src/Redux/Service/Selectors/selectServiceSizePage';
import {selectServiceSearch} from '@infomat/core/src/Redux/Service/Selectors/selectServiceSearch';
import {selectServiceIsLoading} from '@infomat/core/src/Redux/Service/Selectors/selectServiceIsLoading';
import {selectServiceCurrentPage} from '@infomat/core/src/Redux/Service/Selectors/selectServiceCurrentPage';
import {selectServiceIds} from '@infomat/core/src/Redux/Service/Selectors/defaultSelectors';
import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';
import {selectServiceStatus} from '@infomat/core/src/Redux/Service/Selectors/selectServiceStatus';
import {selectServiceSubcategoryId} from '@infomat/core/src/Redux/Service/Selectors/selectServiceSubcategoryId';

import ServicesList from './ServicesList';

const ServicesListContainer = () => {
	const error = useStoreSelector(selectErrorService);
	const totalPage = useStoreSelector(selectServiceTotalPages);
	const size = useStoreSelector(selectServiceSizePage);
	const search = useStoreSelector(selectServiceSearch);
	const isLoading = useStoreSelector(selectServiceIsLoading);
	const currentPage = useStoreSelector(selectServiceCurrentPage);
	const status = useStoreSelector(selectServiceStatus);
	const serviceIds = useStoreSelector(selectServiceIds);
	const subcategoryId = useStoreSelector(selectServiceSubcategoryId);
	const getData = useActionDispatcher(serviceClientToServerActions.getList);

	return (
		<ServicesList
			serviceIds={serviceIds}
			currentPage={currentPage}
			isLoading={isLoading}
			search={search}
			size={size}
			totalPage={totalPage}
			error={error}
			getData={getData}
			status={status}
			subcategoryId={subcategoryId}
		/>
	);
};

export default ServicesListContainer;
