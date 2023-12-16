import {put, select} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';
import _ from 'lodash';

import {audioGuideClientToServerActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientToServerActions';
import {audioGuideClientOnlyActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientOnlyActions';
import {TAudioGuideVM} from '@infomat/core/src/Redux/AudioGuide/entityAdapter';
import {TRespounse} from '@infomat/core/src/Types/PartialBy';
import {selectAudioGuideSizePage} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideSizePage';
import {selectAudioGuideCurrentPage} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideCurrentPage';
import {selectAudioGuideSearch} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideSearch';
import {selectAudioGuideStatus} from '@infomat/core/src/Redux/AudioGuide/Selectors/selectAudioGuideStatus';
import {audioGuideService} from '@infomat/core/src/Services/Api/audioGuide.service';

const getListSaga = function* ({
	payload: {size, page, search, status},
}: ReturnType<typeof audioGuideClientToServerActions.getList>) {
	try {
		const sizeUp = yield* select(selectAudioGuideSizePage);
		const pageUp = yield* select(selectAudioGuideCurrentPage);
		const searchUp = yield* select(selectAudioGuideSearch);
		const statusUp = yield* select(selectAudioGuideStatus);
		const response: AxiosResponse = yield audioGuideService.getList({
			size: size ?? sizeUp,
			page: page ?? pageUp,
			search: search ?? searchUp,
			status: _.isUndefined(status) ? statusUp : status,
		});
		const del = size || sizeUp;
		const data: TRespounse<TAudioGuideVM> = response.data;
		yield* put(audioGuideClientOnlyActions.setTotalPages(Math.ceil(data.total / del)));
		yield* put(audioGuideClientOnlyActions.upsertMany(data.rows));
	} catch (error) {
		yield* put(audioGuideClientOnlyActions.stopLoading());
	}
};

export default getListSaga;
