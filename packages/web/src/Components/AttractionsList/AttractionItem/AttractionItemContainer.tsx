import React from 'react';
import _ from 'lodash';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import {selectPlacesVMById} from '@infomat/core/src/Redux/Places/Selectors/defaultSelectors';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {placesClientToServerActions} from '@infomat/core/src/Redux/Places/Actions/placesClientToServerActions';

import AttractionItem from './AttractionItem';

const AttractionItemContainer = ({id}: TAttractionItemContainerProps) => {
	const objectVM = useStoreSelector(selectPlacesVMById, id);
	const onDelete = useActionDispatcher(placesClientToServerActions.deleteCategory);

	if (_.isUndefined(objectVM)) {
		return null;
	}

	return <AttractionItem id={id} objectVM={objectVM} onDelete={onDelete} />;
};

type TAttractionItemContainerProps = {
	id: number;
};

export default AttractionItemContainer;
