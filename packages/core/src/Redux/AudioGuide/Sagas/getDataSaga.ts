import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {audioGuideClientOnlyActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientOnlyActions';
import {audioGuideClientToServerActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientToServerActions';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TAudioGuideCreate} from '@infomat/core/src/Redux/AudioGuide/entityAdapter';
import {audioGuideService} from '@infomat/core/src/Services/Api/audioGuide.service';

const getDataSaga = function* ({payload}: ReturnType<typeof audioGuideClientToServerActions.get>) {
	try {
		const response: AxiosResponse = yield audioGuideService.getItem(payload);
		const data: TRespounseData<TAudioGuideCreate> = response.data;
		yield* put(audioGuideClientOnlyActions.setData(data.data));
	} catch (error) {
		yield* put(audioGuideClientOnlyActions.stopLoading());
	}
};

export default getDataSaga;
