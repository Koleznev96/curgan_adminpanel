import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {audioGuideClientOnlyActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientOnlyActions';
import {audioGuideClientToServerActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientToServerActions';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {audioGuideService} from '@infomat/core/src/Services/Api/audioGuide.service';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TAudioGuideVM} from '@infomat/core/src/Redux/AudioGuide/entityAdapter';

const updateItemSaga = function* ({payload}: ReturnType<typeof audioGuideClientToServerActions.updateCategory>) {
	try {
		const response: AxiosResponse = yield audioGuideService.updateItem(payload);
		const data: TRespounseData<TAudioGuideVM> = response.data;

		yield* put(audioGuideClientOnlyActions.setData(data.data));

		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Аудио-гид успешно обновлен',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
	} catch (error) {
		yield* put(audioGuideClientOnlyActions.stopLoading());
	}
};

export default updateItemSaga;
