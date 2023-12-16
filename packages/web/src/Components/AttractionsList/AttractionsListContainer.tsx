import React from 'react';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {selectErrorPlaces} from '@infomat/core/src/Redux/Places/Selectors/selectErrorPlaces';
import {selectPlacesTotalPages} from '@infomat/core/src/Redux/Places/Selectors/selectPlacesTotalPages';
import {selectPlacesSizePage} from '@infomat/core/src/Redux/Places/Selectors/selectPlacesSizePage';
import {selectPlacesSearch} from '@infomat/core/src/Redux/Places/Selectors/selectPlacesSearch';
import {selectPlacesIsLoading} from '@infomat/core/src/Redux/Places/Selectors/selectPlacesIsLoading';
import {selectPlacesCurrentPage} from '@infomat/core/src/Redux/Places/Selectors/selectPlacesCurrentPage';
import {selectPlacesIds} from '@infomat/core/src/Redux/Places/Selectors/defaultSelectors';
import {placesClientToServerActions} from '@infomat/core/src/Redux/Places/Actions/placesClientToServerActions';
import {selectPlacesStatus} from '@infomat/core/src/Redux/Places/Selectors/selectPlacesStatus';

import AttractionsList from './AttractionsList';

const AttractionsListContainer = () => {
	const error = useStoreSelector(selectErrorPlaces);
	const totalPage = useStoreSelector(selectPlacesTotalPages);
	const size = useStoreSelector(selectPlacesSizePage);
	const search = useStoreSelector(selectPlacesSearch);
	const isLoading = useStoreSelector(selectPlacesIsLoading);
	const currentPage = useStoreSelector(selectPlacesCurrentPage);
	const status = useStoreSelector(selectPlacesStatus);
	const serviceIds = useStoreSelector(selectPlacesIds);
	const getData = useActionDispatcher(placesClientToServerActions.getList);

	return (
		<AttractionsList
			serviceIds={serviceIds}
			currentPage={currentPage}
			isLoading={isLoading}
			search={search}
			size={size}
			totalPage={totalPage}
			error={error}
			getData={getData}
			status={status}
		/>
	);
};

export default AttractionsListContainer;
