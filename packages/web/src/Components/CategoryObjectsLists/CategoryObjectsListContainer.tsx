import React from 'react';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import {
	selectCategoryObjectIds,
	selectCategoryObjectVMs,
} from '@infomat/core/src/Redux/CategoryObject/Selectors/defaultSelectors';
import {selectCategoryObjectCurrentPage} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryObjectCurrentPage';
import {selectCategoryObjectIsLoading} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryObjectIsLoading';
import {selectCategoryObjectSearch} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryObjectSearch';
import {selectCategoryObjectSizePage} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryObjectSizePage';
import {selectCategoryObjectTotalPages} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryObjectTotalPages';
import {selectErrorCategoryObject} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectErrorCategoryObject';
import {categoryObjectClientToServerActions} from '@infomat/core/src/Redux/CategoryObject/Actions/categoryObjectClientToServerActions';
import {selectCategoryStatus} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryStatus';

import CategoryObjectsList from './CategoryObjectsList';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';

const CategoryObjectsListContainer = () => {
	const error = useStoreSelector(selectErrorCategoryObject);
	const totalPage = useStoreSelector(selectCategoryObjectTotalPages);
	const size = useStoreSelector(selectCategoryObjectSizePage);
	const search = useStoreSelector(selectCategoryObjectSearch);
	const isLoading = useStoreSelector(selectCategoryObjectIsLoading);
	const currentPage = useStoreSelector(selectCategoryObjectCurrentPage);
	const categoryObjectIds = useStoreSelector(selectCategoryObjectIds);
	const getData = useActionDispatcher(categoryObjectClientToServerActions.getList);
	const status = useStoreSelector(selectCategoryStatus);

	return (
		<CategoryObjectsList
			currentPage={currentPage}
			isLoading={isLoading}
			search={search}
			size={size}
			totalPage={totalPage}
			error={error}
			getData={getData}
			status={status}
			categoryObjectIds={categoryObjectIds}
		/>
	);
};

export default CategoryObjectsListContainer;
