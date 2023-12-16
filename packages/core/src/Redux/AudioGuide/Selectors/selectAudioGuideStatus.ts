import {createSelector} from '@infomat/core/src/Utils/Redux/createSelector';
import {TAudioGuideSlice} from '@infomat/core/src/Redux/AudioGuide/slice';
import {getAudioGuideState} from '@infomat/core/src/Redux/AudioGuide/Selectors/getAudioGuideState';

export const selectAudioGuideStatus = createSelector([getAudioGuideState], (state: TAudioGuideSlice) => state.status);
