import {put, call} from 'typed-redux-saga';

import {placesClientOnlyActions} from '@infomat/core/src/Redux/Places/Actions/placesClientOnlyActions';
import {placesClientToServerActions} from '@infomat/core/src/Redux/Places/Actions/placesClientToServerActions';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {placesService} from '@infomat/core/src/Services/Api/places.service';
import {getNavigationContext} from '@infomat/core/src/Redux/sagaContext';

const deleteItemSaga = function* ({payload}: ReturnType<typeof placesClientToServerActions.deleteCategory>) {
	try {
		const {goAttractions} = yield* getNavigationContext();
		yield placesService.deleteItem(payload.id);
		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Достопримечательность объект успешно удалена',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
		yield* call(goAttractions);
	} catch (error) {
		yield* put(placesClientOnlyActions.stopLoading());
	}
};

export default deleteItemSaga;
