import {createSelector} from '@infomat/core/src/Utils/Redux/createSelector';
import {TMuseumGuideSlice} from '@infomat/core/src/Redux/MuseumGuide/slice';
import {getMuseumGuideState} from '@infomat/core/src/Redux/MuseumGuide/Selectors/getMuseumGuideState';

export const selectMuseumGuideIsLoading = createSelector(
	[getMuseumGuideState],
	(state: TMuseumGuideSlice) => state.isLoading,
);
