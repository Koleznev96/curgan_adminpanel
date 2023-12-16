import React from 'react';
import {isUndefined} from 'lodash';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import Page from '@infomat/uikit/src/Page/Page';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {selectAudioGuideData} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideData';
import {selectAudioGuideIsLoading} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideIsLoading';
import {audioGuideClientToServerActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientToServerActions';

import useRouterLinkForMui from 'src/Utils/Navigation/useRouterLinkForMui';
import {Routes} from 'src/Routes/Routes';

import AudioGuide from './AudioGuide';

const AudioGuideContainer = ({id}: TAudioGuideContainerProps) => {
	const audioGuideObjectVM = useStoreSelector(selectAudioGuideData);
	const isLoading = useStoreSelector(selectAudioGuideIsLoading);
	const onDelete = useActionDispatcher(audioGuideClientToServerActions.deleteCategory);
	const onUpdate = useActionDispatcher(audioGuideClientToServerActions.updateCategory);
	const onCreate = useActionDispatcher(audioGuideClientToServerActions.createCategory);
	const AudioGuideLink = useRouterLinkForMui(Routes.audioGuides);

	const dataVM = isUndefined(id) ? undefined : audioGuideObjectVM;

	return (
		<Page
			isLoading={isLoading || (isUndefined(dataVM) && !isUndefined(id))}
			backLink={AudioGuideLink}
			label={isUndefined(id) ? 'Создание аудио-гида' : 'Редактирование аудио-гида'}
		>
			<AudioGuide
				id={id}
				audioGuideObjectVM={dataVM}
				onSubmit={isUndefined(id) ? onCreate : onUpdate}
				onDelete={onDelete}
			/>
		</Page>
	);
};

type TAudioGuideContainerProps = {
	id?: number;
};

export default AudioGuideContainer;
