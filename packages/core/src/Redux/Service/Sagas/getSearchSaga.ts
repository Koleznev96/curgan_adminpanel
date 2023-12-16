import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';
import _ from 'lodash';

import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';
import {serviceClientOnlyActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientOnlyActions';
import {TServiceVM} from '@infomat/core/src/Redux/Service/entityAdapter';
import {TRespounse} from '@infomat/core/src/Types/PartialBy';
import {serviceService} from '@infomat/core/src/Services/Api/service.service';

const getSearchSaga = function* ({payload}: ReturnType<typeof serviceClientToServerActions.getSearch>) {
	try {
		const response: AxiosResponse = yield serviceService.getList({
			size: 10,
			page: 0,
			search: payload,
		});
		const data: TRespounse<TServiceVM> = response.data;
		yield* put(serviceClientOnlyActions.setList(data.rows));
	} catch (error) {
		yield* put(serviceClientOnlyActions.stopLoading());
	}
};

export default getSearchSaga;
