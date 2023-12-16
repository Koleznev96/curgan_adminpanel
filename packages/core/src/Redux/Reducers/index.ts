import _ from 'lodash';
import {combineReducers} from 'redux';
import {enableBatching} from 'redux-batched-actions';
import {createAction, Reducer} from '@reduxjs/toolkit';

import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';
import geocodingSlice from '@infomat/core/src/Redux/Geocoding/slice';
import userSlice from '@infomat/core/src/Redux/User/slice';
import informationSlice from '@infomat/core/src/Redux/Information/slice';
import categoryObjectSlice from '@infomat/core/src/Redux/CategoryObject/slice';
import notificationsSlice from '@infomat/core/src/Redux/Notifications/slice';
import placesSlice from '@infomat/core/src/Redux/Places/slice';
import serviceSlice from '@infomat/core/src/Redux/Service/slice';
import eventsSlice from '@infomat/core/src/Redux/Events/slice';
import audioGuideSlice from '@infomat/core/src/Redux/AudioGuide/slice';
import museumGuideSlice from '@infomat/core/src/Redux/MuseumGuide/slice';

const reducers = {
	[EnumStore.GEOCODING]: geocodingSlice.reducer,
	[EnumStore.USER]: userSlice.reducer,
	[EnumStore.INFORMATION]: informationSlice.reducer,
	[EnumStore.NOTIFICATIONS]: notificationsSlice.reducer,
	[EnumStore.SERVICE]: serviceSlice.reducer,
	[EnumStore.PLACES]: placesSlice.reducer,
	[EnumStore.EVENTS]: eventsSlice.reducer,
	[EnumStore.CATEGORY_OBJECT]: categoryObjectSlice.reducer,
	[EnumStore.AUDIO_GUIDE]: audioGuideSlice.reducer,
	[EnumStore.MUSEUM_GUIDE]: museumGuideSlice.reducer,
};

export const resetAllStores = createAction<{keepLocalStores: boolean} | undefined>('app/reset_all_stores');

const combinedReducers = combineReducers(reducers);

const rootReducer: Reducer<ReturnType<typeof combinedReducers>> = (state, action) => {
	const newState = combinedReducers(action.type === resetAllStores.type ? undefined : state, action);

	return newState;
};

export default enableBatching(rootReducer);
