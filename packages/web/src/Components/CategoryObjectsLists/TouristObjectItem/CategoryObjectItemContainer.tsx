import React from 'react';
import _ from 'lodash';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import {selectCategoryObjectVMById} from '@infomat/core/src/Redux/CategoryObject/Selectors/defaultSelectors';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {placesClientToServerActions} from '@infomat/core/src/Redux/Places/Actions/placesClientToServerActions';

import CategoryObjectItem from './CategoryObjectItem';

const CategoryObjectItemContainer = ({id}: TCategoryObjectItemContainerProps) => {
	const touristObjectVM = useStoreSelector(selectCategoryObjectVMById, id);
	const onDelete = useActionDispatcher(placesClientToServerActions.deleteCategory);

	if (_.isUndefined(touristObjectVM)) {
		return null;
	}

	return <CategoryObjectItem id={id} itemVM={touristObjectVM} onDelete={onDelete} />;
};

type TCategoryObjectItemContainerProps = {
	id: number;
};

export default CategoryObjectItemContainer;
