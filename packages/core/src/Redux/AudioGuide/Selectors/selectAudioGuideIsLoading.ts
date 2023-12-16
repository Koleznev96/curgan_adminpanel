import {createSelector} from '@infomat/core/src/Utils/Redux/createSelector';
import {TAudioGuideSlice} from '@infomat/core/src/Redux/AudioGuide/slice';
import {getAudioGuideState} from '@infomat/core/src/Redux/AudioGuide/Selectors/getAudioGuideState';

export const selectAudioGuideIsLoading = createSelector(
	[getAudioGuideState],
	(state: TAudioGuideSlice) => state.isLoading,
);
