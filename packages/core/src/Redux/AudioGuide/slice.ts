import {createSlice, EntityState, SliceCaseReducers} from '@reduxjs/toolkit';
import _ from 'lodash';

import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';

import {audioGuideAdapter, TAudioGuideCreate, TAudioGuideVM} from './entityAdapter';
import {audioGuideClientOnlyActions} from './Actions/audioGuideClientOnlyActions';
import {audioGuideClientToServerActions} from './Actions/audioGuideClientToServerActions';

export const initialAudioGuideState = audioGuideAdapter.getInitialState({
	isLoading: false,
	error: undefined,
	search: '',
	currentPage: 0,
	totalPages: 1,
	sizePage: 10,
});

const audioGuideSlice = createSlice<TAudioGuideSlice, SliceCaseReducers<TAudioGuideSlice>, EnumStore>({
	name: EnumStore.AUDIO_GUIDE,
	initialState: initialAudioGuideState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(audioGuideClientOnlyActions.resetStore, () => initialAudioGuideState);
		builder.addCase(audioGuideClientOnlyActions.upsertMany, (state, action) => {
			state.isLoading = false;
			state.error = undefined;
			return audioGuideAdapter.setAll(state, action);
		});
		builder.addCase(audioGuideClientOnlyActions.setError, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(audioGuideClientOnlyActions.update, (state) => {
			state.data = undefined;
			state.isLoading = false;
		});
		builder.addCase(audioGuideClientToServerActions.getList, (state, action) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
			state.sizePage = !_.isUndefined(action.payload.size) ? action.payload.size : state.sizePage;
			state.search = !_.isUndefined(action.payload.search) ? action.payload.search : state.search;
			state.currentPage = !_.isUndefined(action.payload.page) ? action.payload.page : state.currentPage;
			state.status = !_.isUndefined(action.payload.status) ? action.payload.status : state.status;
		});
		builder.addCase(audioGuideClientToServerActions.updateCategory, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(audioGuideClientToServerActions.createCategory, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(audioGuideClientToServerActions.deleteCategory, (state) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(audioGuideClientToServerActions.deleteRecommend, (state) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(audioGuideClientToServerActions.get, (state) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(audioGuideClientOnlyActions.setData, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
			state.error = undefined;
		});
		builder.addCase(audioGuideClientOnlyActions.stopLoading, (state) => {
			state.isLoading = false;
			state.error = undefined;
		});
		builder.addCase(audioGuideClientOnlyActions.setTotalPages, (state, action) => {
			state.totalPages = action.payload;
		});
	},
});

export type TAudioGuideSlice = EntityState<TAudioGuideVM> & {
	data?: TAudioGuideCreate;
	isLoading: boolean;
	error?: string;
	search: string;
	currentPage: number;
	totalPages: number;
	sizePage: number;
	status?: string | null;
};

export default audioGuideSlice;
