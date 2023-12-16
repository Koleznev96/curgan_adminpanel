import React from 'react';
import _ from 'lodash';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import {selectMuseumGuideVMById} from '@infomat/core/src/Redux/MuseumGuide/Selectors/defaultSelectors';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {museumGuideClientToServerActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientToServerActions';

import MuseumGuideItem from './MuseumGuideItem';

const MuseumGuideItemContainer = ({id}: TMuseumGuideItemContainerProps) => {
	const objectVM = useStoreSelector(selectMuseumGuideVMById, id);
	const onDelete = useActionDispatcher(museumGuideClientToServerActions.deleteCategory);

	if (_.isUndefined(objectVM)) {
		return null;
	}

	return <MuseumGuideItem id={id} objectVM={objectVM} onDelete={onDelete} />;
};

type TMuseumGuideItemContainerProps = {
	id: number;
};

export default MuseumGuideItemContainer;
