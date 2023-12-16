import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {museumGuideClientOnlyActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientOnlyActions';
import {museumGuideClientToServerActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientToServerActions';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TMuseumGuideCreate} from '@infomat/core/src/Redux/MuseumGuide/entityAdapter';
import {museumGuideService} from '@infomat/core/src/Services/Api/museumGuide.service';

const getDataSaga = function* ({payload}: ReturnType<typeof museumGuideClientToServerActions.get>) {
	try {
		const response: AxiosResponse = yield museumGuideService.getItem(payload);
		const data: TRespounseData<TMuseumGuideCreate> = response.data;
		yield* put(museumGuideClientOnlyActions.setData(data.data));
	} catch (error) {
		yield* put(museumGuideClientOnlyActions.stopLoading());
	}
};

export default getDataSaga;
