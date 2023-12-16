import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import {informationClientToServerActions} from '@infomat/core/src/Redux/Information/Actions/informationClientToServerActions';
import {informationClientOnlyActions} from '@infomat/core/src/Redux/Information/Actions/informationClientOnlyActions';
import {informationService} from '@infomat/core/src/Services/Api/information.service';
import {TRespounseData} from '@infomat/core/src/Types/PartialBy';
import {TInformationElementVM} from '@infomat/core/src/Redux/Information/type';
import notificationsClientOnlyActions from '../../Notifications/Actions/notificationsClientOnlyActions';
import {EnumNotificationSeverity} from '@infomat/uikit/src/Notification/EnumNotificationSeverity';

const updateInformationElementSaga = function* ({
	payload,
}: ReturnType<typeof informationClientToServerActions.updateInfo>) {
	try {
		const response: AxiosResponse = yield informationService.updateDataElement(
			{info: payload.info, infoEn: payload.infoEn},
			payload.type,
		);
		const data: TRespounseData<TInformationElementVM> = response.data;
		yield put(
			notificationsClientOnlyActions.enqueuePersistent({
				notificationTitle: 'Информация успешно обновлена',
				duration: 5000,
				severity: EnumNotificationSeverity.SUCCESS,
			}),
		);
		yield* put(informationClientOnlyActions.upsetInfo(data.data));
	} catch (error) {
		yield* put(informationClientOnlyActions.stopLoading());
	}
};

export default updateInformationElementSaga;
