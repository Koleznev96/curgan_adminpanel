import React from 'react';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {selectErrorMuseumGuide} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectErrorMuseumGuide';
import {selectMuseumGuideTotalPages} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideTotalPages';
import {selectMuseumGuideSizePage} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideSizePage';
import {selectMuseumGuideSearch} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideSearch';
import {selectMuseumGuideIsLoading} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideIsLoading';
import {selectMuseumGuideCurrentPage} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideCurrentPage';
import {selectMuseumGuideIds} from '@infomat/core/src/Redux/MuseumGuide/Selectors/defaultSelectors';
import {museumGuideClientToServerActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientToServerActions';
import {selectMuseumGuideStatus} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideStatus';

import MuseumGuidesList from './MuseumGuidesList';

const MuseumGuidesListContainer = () => {
	const error = useStoreSelector(selectErrorMuseumGuide);
	const totalPage = useStoreSelector(selectMuseumGuideTotalPages);
	const size = useStoreSelector(selectMuseumGuideSizePage);
	const search = useStoreSelector(selectMuseumGuideSearch);
	const isLoading = useStoreSelector(selectMuseumGuideIsLoading);
	const currentPage = useStoreSelector(selectMuseumGuideCurrentPage);
	const status = useStoreSelector(selectMuseumGuideStatus);
	const serviceIds = useStoreSelector(selectMuseumGuideIds);
	const getData = useActionDispatcher(museumGuideClientToServerActions.getList);

	return (
		<MuseumGuidesList
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

export default MuseumGuidesListContainer;
