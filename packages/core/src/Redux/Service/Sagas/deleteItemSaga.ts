import {put, call} from 'typed-redux-saga';

import {serviceClientOnlyActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientOnlyActions';
import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {serviceService} from '@infomat/core/src/Services/Api/service.service';
import {getNavigationContext} from '@infomat/core/src/Redux/sagaContext';

const deleteItemSaga = function* ({payload}: ReturnType<typeof serviceClientToServerActions.deleteCategory>) {
	try {
		const {goServices} = yield* getNavigationContext();
		yield serviceService.deleteItem(payload.id);
		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Услуга успешно удалена',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
		yield* call(goServices);
	} catch (error) {
		yield* put(serviceClientOnlyActions.stopLoading());
	}
};

export default deleteItemSaga;
