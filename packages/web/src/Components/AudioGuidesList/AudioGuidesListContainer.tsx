import React from 'react';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {selectErrorAudioGuide} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectErrorAudioGuide';
import {selectAudioGuideTotalPages} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideTotalPages';
import {selectAudioGuideSizePage} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideSizePage';
import {selectAudioGuideSearch} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideSearch';
import {selectAudioGuideIsLoading} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideIsLoading';
import {selectAudioGuideCurrentPage} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideCurrentPage';
import {selectAudioGuideIds} from '@infomat/core/src/Redux/AudioGuide/Selectors/defaultSelectors';
import {audioGuideClientToServerActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientToServerActions';
import {selectAudioGuideStatus} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideStatus';

import AudioGuidesList from './AudioGuidesList';

const AudioGuidesListContainer = () => {
	const error = useStoreSelector(selectErrorAudioGuide);
	const totalPage = useStoreSelector(selectAudioGuideTotalPages);
	const size = useStoreSelector(selectAudioGuideSizePage);
	const search = useStoreSelector(selectAudioGuideSearch);
	const isLoading = useStoreSelector(selectAudioGuideIsLoading);
	const currentPage = useStoreSelector(selectAudioGuideCurrentPage);
	const status = useStoreSelector(selectAudioGuideStatus);
	const serviceIds = useStoreSelector(selectAudioGuideIds);
	const getData = useActionDispatcher(audioGuideClientToServerActions.getList);

	return (
		<AudioGuidesList
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

export default AudioGuidesListContainer;
