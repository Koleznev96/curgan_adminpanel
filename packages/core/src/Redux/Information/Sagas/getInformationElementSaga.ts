import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {informationClientOnlyActions} from '@infomat/core/src/Redux/Information/Actions/informationClientOnlyActions';
import {informationService} from '@infomat/core/src/Services/Api/information.service';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TInformationElementVM} from '@infomat/core/src/Redux/Information/type';
import {informationClientToServerActions} from '../Actions/informationClientToServerActions';

const getInformationElementSaga = function* ({payload}: ReturnType<typeof informationClientToServerActions.getInfo>) {
	try {
		const response: AxiosResponse = yield informationService.getDataElement(payload);
		const data: TRespounseData<TInformationElementVM> = response.data;
		yield* put(informationClientOnlyActions.upsetInfo(data.data));
	} catch (error) {
		yield* put(informationClientOnlyActions.stopLoading());
	}
};

export default getInformationElementSaga;
