import _ from 'lodash';

import {createSelector} from '@infomat/core/src/Utils/Redux/createSelector';
import {selectAllNotifications} from '@infomat/core/src/Redux/Notifications/Selectors/defaultSelectors';
import {EnumNotificationStatus} from '@infomat/core/src/Redux/Notifications/EnumNotificationStatus';

export const selectShowNotificationPositionBottom = createSelector([selectAllNotifications], (notifications) =>
	_.find(notifications, {status: EnumNotificationStatus.SHOWN, isPositionBottom: true}),
);
