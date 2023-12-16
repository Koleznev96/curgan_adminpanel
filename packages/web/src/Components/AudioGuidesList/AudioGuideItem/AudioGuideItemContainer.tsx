import React from 'react';
import _ from 'lodash';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import {selectAudioGuideVMById} from '@infomat/core/src/Redux/AudioGuide/Selectors/defaultSelectors';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {audioGuideClientToServerActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientToServerActions';

import AudioGuideItem from './AudioGuideItem';

const AudioGuideItemContainer = ({id}: TAudioGuideItemContainerProps) => {
	const objectVM = useStoreSelector(selectAudioGuideVMById, id);
	const onDelete = useActionDispatcher(audioGuideClientToServerActions.deleteCategory);

	if (_.isUndefined(objectVM)) {
		return null;
	}

	return <AudioGuideItem id={id} objectVM={objectVM} onDelete={onDelete} />;
};

type TAudioGuideItemContainerProps = {
	id: number;
};

export default AudioGuideItemContainer;
