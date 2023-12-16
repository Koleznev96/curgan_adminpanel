import {put, call, take} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {audioGuideClientOnlyActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientOnlyActions';
import {audioGuideClientToServerActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientToServerActions';
import {getNavigationContext} from '@infomat/core/src/Redux/sagaContext';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {audioGuideService} from '@infomat/core/src/Services/Api/audioGuide.service';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TAudioGuideVM} from '@infomat/core/src/Redux/AudioGuide/entityAdapter';

const createItemSaga = function* ({payload}: ReturnType<typeof audioGuideClientToServerActions.createCategory>) {
	try {
		const {goAudioGuide} = yield* getNavigationContext();

		const response: AxiosResponse = yield audioGuideService.createItem(payload);
		const data: TRespounseData<TAudioGuideVM> = response.data;

		yield* call(goAudioGuide, data.data.id);

		yield* take(audioGuideClientOnlyActions.setData.type);
		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Аудио-гид успешно создан',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
	} catch (error) {
		yield* put(audioGuideClientOnlyActions.stopLoading());
	}
};

export default createItemSaga;
