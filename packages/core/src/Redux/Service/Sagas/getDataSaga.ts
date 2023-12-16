import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {serviceClientOnlyActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientOnlyActions';
import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TServiceCreate} from '@infomat/core/src/Redux/Service/entityAdapter';
import {serviceService} from '@infomat/core/src/Services/Api/service.service';

const getDataSaga = function* ({payload}: ReturnType<typeof serviceClientToServerActions.get>) {
	try {
		const response: AxiosResponse = yield serviceService.getItem(payload);
		const data: TRespounseData<TServiceCreate> = response.data;
		yield* put(serviceClientOnlyActions.setData(data.data));
	} catch (error) {
		yield* put(serviceClientOnlyActions.stopLoading());
	}
};

export default getDataSaga;
