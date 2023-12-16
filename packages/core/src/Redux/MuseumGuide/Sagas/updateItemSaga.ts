import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {museumGuideClientOnlyActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientOnlyActions';
import {museumGuideClientToServerActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientToServerActions';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {museumGuideService} from '@infomat/core/src/Services/Api/museumGuide.service';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TMuseumGuideVM} from '@infomat/core/src/Redux/MuseumGuide/entityAdapter';

const updateItemSaga = function* ({payload}: ReturnType<typeof museumGuideClientToServerActions.updateCategory>) {
	try {
		const response: AxiosResponse = yield museumGuideService.updateItem(payload);
		const data: TRespounseData<TMuseumGuideVM> = response.data;

		yield* put(museumGuideClientOnlyActions.setData(data.data));

		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Музейный гид успешно обновлен',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
	} catch (error) {
		yield* put(museumGuideClientOnlyActions.stopLoading());
	}
};

export default updateItemSaga;
