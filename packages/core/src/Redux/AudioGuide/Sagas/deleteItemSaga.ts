import {put, call} from 'typed-redux-saga';

import {audioGuideClientOnlyActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientOnlyActions';
import {audioGuideClientToServerActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientToServerActions';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {getNavigationContext} from '@infomat/core/src/Redux/sagaContext';
import {audioGuideService} from '@infomat/core/src/Services/Api/audioGuide.service';

const deleteItemSaga = function* ({payload}: ReturnType<typeof audioGuideClientToServerActions.deleteCategory>) {
	try {
		const {goAudioGuides} = yield* getNavigationContext();
		yield audioGuideService.deleteItem(payload.id);
		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Аудио-гид успешно удален',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
		yield* call(goAudioGuides);
	} catch (error) {
		yield* put(audioGuideClientOnlyActions.stopLoading());
	}
};

export default deleteItemSaga;
