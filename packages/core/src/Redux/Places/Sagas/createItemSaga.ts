import {put, call, take} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {placesClientOnlyActions} from '@infomat/core/src/Redux/Places/Actions/placesClientOnlyActions';
import {placesClientToServerActions} from '@infomat/core/src/Redux/Places/Actions/placesClientToServerActions';
import {getNavigationContext} from '@infomat/core/src/Redux/sagaContext';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {placesService} from '@infomat/core/src/Services/Api/places.service';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TPlacesVM} from '@infomat/core/src/Redux/Places/entityAdapter';

const createItemSaga = function* ({payload}: ReturnType<typeof placesClientToServerActions.createCategory>) {
	try {
		const {goAttraction} = yield* getNavigationContext();

		const response: AxiosResponse = yield placesService.createItem(payload);
		const data: TRespounseData<TPlacesVM> = response.data;

		yield* call(goAttraction, data.data.id);

		yield* take(placesClientOnlyActions.setData.type);
		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Достопримечательность успешно создана',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
	} catch (error) {
		yield* put(placesClientOnlyActions.stopLoading());
	}
};

export default createItemSaga;
