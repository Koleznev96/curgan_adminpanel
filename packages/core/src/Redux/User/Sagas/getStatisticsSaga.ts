import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {audioGuideClientOnlyActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientOnlyActions';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {authService} from '@infomat/core/src/Services/Api/auth.service';

import {TStatistics} from '../slice';
import {userClientOnlyActions} from '../Actions/userClientOnlyActions';

const getStatisticsSaga = function* () {
	try {
		const response: AxiosResponse = yield authService.getStatistics();
		const data: TStatistics = response.data;
		yield* put(userClientOnlyActions.setStatistics(data));
	} catch (error) {
		yield* put(userClientOnlyActions.stopLoading());
	}
};

export default getStatisticsSaga;
