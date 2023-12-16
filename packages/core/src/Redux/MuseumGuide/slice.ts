import {createSlice, EntityState, SliceCaseReducers} from '@reduxjs/toolkit';
import _ from 'lodash';

import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';

import {museumGuideAdapter, TMuseumGuideCreate, TMuseumGuideVM} from './entityAdapter';
import {museumGuideClientOnlyActions} from './Actions/museumGuideClientOnlyActions';
import {museumGuideClientToServerActions} from './Actions/museumGuideClientToServerActions';

export const initialMuseumGuideState = museumGuideAdapter.getInitialState({
	isLoading: false,
	error: undefined,
	search: '',
	currentPage: 0,
	totalPages: 1,
	sizePage: 10,
});

const museumGuideSlice = createSlice<TMuseumGuideSlice, SliceCaseReducers<TMuseumGuideSlice>, EnumStore>({
	name: EnumStore.AUDIO_GUIDE,
	initialState: initialMuseumGuideState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(museumGuideClientOnlyActions.resetStore, () => initialMuseumGuideState);
		builder.addCase(museumGuideClientOnlyActions.upsertMany, (state, action) => {
			state.isLoading = false;
			state.error = undefined;
			return museumGuideAdapter.setAll(state, action);
		});
		builder.addCase(museumGuideClientOnlyActions.setError, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(museumGuideClientOnlyActions.update, (state) => {
			state.data = undefined;
			state.isLoading = false;
		});
		builder.addCase(museumGuideClientToServerActions.getList, (state, action) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
			state.sizePage = !_.isUndefined(action.payload.size) ? action.payload.size : state.sizePage;
			state.search = !_.isUndefined(action.payload.search) ? action.payload.search : state.search;
			state.currentPage = !_.isUndefined(action.payload.page) ? action.payload.page : state.currentPage;
			state.status = !_.isUndefined(action.payload.status) ? action.payload.status : state.status;
		});
		builder.addCase(museumGuideClientToServerActions.updateCategory, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(museumGuideClientToServerActions.createCategory, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(museumGuideClientToServerActions.deleteCategory, (state) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(museumGuideClientToServerActions.deleteRecommend, (state) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(museumGuideClientToServerActions.get, (state) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(museumGuideClientOnlyActions.setData, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
			state.error = undefined;
		});
		builder.addCase(museumGuideClientOnlyActions.stopLoading, (state) => {
			state.isLoading = false;
			state.error = undefined;
		});
		builder.addCase(museumGuideClientOnlyActions.setTotalPages, (state, action) => {
			state.totalPages = action.payload;
		});
	},
});

export type TMuseumGuideSlice = EntityState<TMuseumGuideVM> & {
	data?: TMuseumGuideCreate;
	isLoading: boolean;
	error?: string;
	search: string;
	currentPage: number;
	totalPages: number;
	sizePage: number;
	status?: string | null;
};

export default museumGuideSlice;
