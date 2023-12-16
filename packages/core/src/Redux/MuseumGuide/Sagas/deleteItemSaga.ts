import {put, call} from 'typed-redux-saga';

import {museumGuideClientOnlyActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientOnlyActions';
import {museumGuideClientToServerActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientToServerActions';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {getNavigationContext} from '@infomat/core/src/Redux/sagaContext';
import {museumGuideService} from '@infomat/core/src/Services/Api/museumGuide.service';

const deleteItemSaga = function* ({payload}: ReturnType<typeof museumGuideClientToServerActions.deleteCategory>) {
	try {
		const {goMuseumGuides} = yield* getNavigationContext();
		yield museumGuideService.deleteItem(payload.id);
		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Музейный гид успешно удален',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
		yield* call(goMuseumGuides);
	} catch (error) {
		yield* put(museumGuideClientOnlyActions.stopLoading());
	}
};

export default deleteItemSaga;
