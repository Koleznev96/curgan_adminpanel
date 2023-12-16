import {put, select} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';
import _ from 'lodash';

import {categoryObjectClientToServerActions} from '@infomat/core/src/Redux/CategoryObject/Actions/categoryObjectClientToServerActions';
import {categoryObjectClientOnlyActions} from '@infomat/core/src/Redux/CategoryObject/Actions/categoryObjectClientOnlyActions';
import {categoryObjectService} from '@infomat/core/src/Services/Api/categoryObject.service';
import {TCategoryObjectVM} from '@infomat/core/src/Redux/CategoryObject/entityAdapter';
import {TRespounse} from '@infomat/core/src/Types/PartialBy';
import {selectCategoryObjectSizePage} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryObjectSizePage';
import {selectCategoryObjectCurrentPage} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryObjectCurrentPage';
import {selectCategoryObjectSearch} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryObjectSearch';
import {selectCategoryStatus} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryStatus';

const getCategoryObjectListSaga = function* ({
	payload: {size, page, search, status},
}: ReturnType<typeof categoryObjectClientToServerActions.getList>) {
	try {
		const sizeUp = yield* select(selectCategoryObjectSizePage);
		const pageUp = yield* select(selectCategoryObjectCurrentPage);
		const searchUp = yield* select(selectCategoryObjectSearch);
		const statusUp = yield* select(selectCategoryStatus);
		const response: AxiosResponse = yield categoryObjectService.getList({
			size: size ?? sizeUp,
			page: page ?? pageUp,
			search: search ?? searchUp,
			status: _.isUndefined(status) ? statusUp : status,
		});
		const del = size || sizeUp;
		const data: TRespounse<TCategoryObjectVM> = response.data;
		yield* put(categoryObjectClientOnlyActions.setTotalPages(Math.ceil(data.total / del)));
		yield* put(categoryObjectClientOnlyActions.upsertMany(data.rows));
	} catch (error) {
		yield* put(categoryObjectClientOnlyActions.stopLoading());
	}
};

export default getCategoryObjectListSaga;
