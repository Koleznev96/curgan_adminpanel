import {createSelector} from '@infomat/core/src/Utils/Redux/createSelector';
import {TPlacesSlice} from '@infomat/core/src/Redux/Places/slice';
import {getPlacesState} from '@infomat/core/src/Redux/Places/Selectors/getPlacesState';

export const selectPlacesIsLoading = createSelector([getPlacesState], (state: TPlacesSlice) => state.isLoading);
