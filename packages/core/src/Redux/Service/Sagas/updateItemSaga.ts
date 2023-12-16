import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {serviceClientOnlyActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientOnlyActions';
import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {serviceService} from '@infomat/core/src/Services/Api/service.service';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TServiceVM} from '@infomat/core/src/Redux/Service/entityAdapter';

const updateItemSaga = function* ({payload}: ReturnType<typeof serviceClientToServerActions.updateCategory>) {
	try {
		const response: AxiosResponse = yield serviceService.updateItem(payload);
		const data: TRespounseData<TServiceVM> = response.data;

		yield* put(serviceClientOnlyActions.setData(data.data));

		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Услуга успешно обновлена',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
	} catch (error) {
		yield* put(serviceClientOnlyActions.stopLoading());
	}
};

export default updateItemSaga;
