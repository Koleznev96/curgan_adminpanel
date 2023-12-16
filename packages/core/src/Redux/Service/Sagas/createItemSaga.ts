import {put, call, take} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {serviceClientOnlyActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientOnlyActions';
import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';
import {getNavigationContext} from '@infomat/core/src/Redux/sagaContext';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {serviceService} from '@infomat/core/src/Services/Api/service.service';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TServiceVM} from '@infomat/core/src/Redux/Service/entityAdapter';

const createItemSaga = function* ({payload}: ReturnType<typeof serviceClientToServerActions.createCategory>) {
	try {
		const {goService} = yield* getNavigationContext();

		const response: AxiosResponse = yield serviceService.createItem(payload);
		const data: TRespounseData<TServiceVM> = response.data;

		yield* call(goService, data.data.id);

		yield* take(serviceClientOnlyActions.setData.type);
		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Услуга успешно создана',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
	} catch (error) {
		yield* put(serviceClientOnlyActions.stopLoading());
	}
};

export default createItemSaga;
