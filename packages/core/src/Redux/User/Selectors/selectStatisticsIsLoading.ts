import {createSelector} from '@infomat/core/src/Utils/Redux/createSelector';
import {TUserSlice} from '@infomat/core/src/Redux/User/slice';
import {getUserState} from './getUserState';

export const selectStatisticsIsLoading = createSelector(
	[getUserState],
	(state: TUserSlice) => state.statistics.isLoading,
);
