import {createSelector} from '@infomat/core/src/Utils/Redux/createSelector';
import {TServiceSlice} from '@infomat/core/src/Redux/Service/slice';
import {getServiceState} from '@infomat/core/src/Redux/Service/Selectors/getServiceState';

export const selectServiceCurrentPage = createSelector([getServiceState], (state: TServiceSlice) => state.currentPage);
