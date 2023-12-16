import {put, call, take} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {museumGuideClientOnlyActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientOnlyActions';
import {museumGuideClientToServerActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientToServerActions';
import {getNavigationContext} from '@infomat/core/src/Redux/sagaContext';
import notificationsClientOnlyActions from '@infomat/core/src/Redux/Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';
import {museumGuideService} from '@infomat/core/src/Services/Api/museumGuide.service';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TMuseumGuideVM} from '@infomat/core/src/Redux/MuseumGuide/entityAdapter';

const createItemSaga = function* ({payload}: ReturnType<typeof museumGuideClientToServerActions.createCategory>) {
	try {
		const {goMuseumGuide} = yield* getNavigationContext();

		const response: AxiosResponse = yield museumGuideService.createItem(payload);
		const data: TRespounseData<TMuseumGuideVM> = response.data;

		yield* call(goMuseumGuide, data.data.id);

		yield* take(museumGuideClientOnlyActions.setData.type);
		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Музейный гид успешно создан',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
	} catch (error) {
		yield* put(museumGuideClientOnlyActions.stopLoading());
	}
};

export default createItemSaga;
