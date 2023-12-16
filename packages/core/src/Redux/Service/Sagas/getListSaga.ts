import {put, select} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';
import _ from 'lodash';

import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';
import {serviceClientOnlyActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientOnlyActions';
import {TServiceVM} from '@infomat/core/src/Redux/Service/entityAdapter';
import {TRespounse} from '@infomat/core/src/Types/PartialBy';
import {selectServiceSizePage} from '@infomat/core/src/Redux/Service/Selectors/selectServiceSizePage';
import {selectServiceCurrentPage} from '@infomat/core/src/Redux/Service/Selectors/selectServiceCurrentPage';
import {selectServiceSearch} from '@infomat/core/src/Redux/Service/Selectors/selectServiceSearch';
import {selectServiceStatus} from '@infomat/core/src/Redux/Service/Selectors/selectServiceStatus';
import {serviceService} from '@infomat/core/src/Services/Api/service.service';
import {selectServiceSubcategoryId} from '@infomat/core/src/Redux/Service/Selectors/selectServiceSubcategoryId';

const getListSaga = function* ({
	payload: {size, page, search, status, subcategoryId},
}: ReturnType<typeof serviceClientToServerActions.getList>) {
	try {
		const sizeUp = yield* select(selectServiceSizePage);
		const pageUp = yield* select(selectServiceCurrentPage);
		const searchUp = yield* select(selectServiceSearch);
		const statusUp = yield* select(selectServiceStatus);
		const subcategoryIdUp = yield* select(selectServiceSubcategoryId);
		const response: AxiosResponse = yield serviceService.getList({
			size: size ?? sizeUp,
			page: page ?? pageUp,
			search: search ?? searchUp,
			status: _.isUndefined(status) ? statusUp : status,
			categoryId: _.isUndefined(subcategoryId) ? subcategoryIdUp : subcategoryId,
		});
		const del = size || sizeUp;
		const data: TRespounse<TServiceVM> = response.data;
		yield* put(serviceClientOnlyActions.setTotalPages(Math.ceil(data.total / del)));
		yield* put(serviceClientOnlyActions.upsertMany(data.rows));
	} catch (error) {
		yield* put(serviceClientOnlyActions.stopLoading());
	}
};

export default getListSaga;
