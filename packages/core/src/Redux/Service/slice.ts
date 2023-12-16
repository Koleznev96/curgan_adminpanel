import {createSlice, EntityState, SliceCaseReducers} from '@reduxjs/toolkit';
import _ from 'lodash';

import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';

import {serviceAdapter, TServiceCreate, TServiceVM} from './entityAdapter';
import {serviceClientOnlyActions} from './Actions/serviceClientOnlyActions';
import {serviceClientToServerActions} from './Actions/serviceClientToServerActions';

export const initialserviceState = serviceAdapter.getInitialState({
	isLoading: false,
	error: undefined,
	search: '',
	currentPage: 0,
	totalPages: 1,
	sizePage: 10,
	list: [],
});

const serviceSlice = createSlice<TServiceSlice, SliceCaseReducers<TServiceSlice>, EnumStore>({
	name: EnumStore.SERVICE,
	initialState: initialserviceState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(serviceClientOnlyActions.resetStore, () => initialserviceState);
		builder.addCase(serviceClientOnlyActions.upsertMany, (state, action) => {
			state.isLoading = false;
			state.error = undefined;
			return serviceAdapter.setAll(state, action);
		});
		builder.addCase(serviceClientOnlyActions.setError, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(serviceClientOnlyActions.update, (state) => {
			state.data = undefined;
			state.isLoading = false;
		});
		builder.addCase(serviceClientToServerActions.getList, (state, action) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
			state.sizePage = !_.isUndefined(action.payload.size) ? action.payload.size : state.sizePage;
			state.search = !_.isUndefined(action.payload.search) ? action.payload.search : state.search;
			state.subcategoryId = !_.isUndefined(action.payload.subcategoryId)
				? action.payload.subcategoryId
				: state.subcategoryId;
			state.currentPage = !_.isUndefined(action.payload.page) ? action.payload.page : state.currentPage;
			state.status = !_.isUndefined(action.payload.status) ? action.payload.status : state.status;
		});
		builder.addCase(serviceClientToServerActions.updateCategory, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(serviceClientToServerActions.createCategory, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(serviceClientToServerActions.deleteCategory, (state) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(serviceClientToServerActions.get, (state) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(serviceClientOnlyActions.setData, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
			state.error = undefined;
		});
		builder.addCase(serviceClientOnlyActions.stopLoading, (state) => {
			state.isLoading = false;
			state.error = undefined;
		});
		builder.addCase(serviceClientOnlyActions.setTotalPages, (state, action) => {
			state.totalPages = action.payload;
		});
		builder.addCase(serviceClientToServerActions.getSearch, (state, action) => {
			state.data = undefined;
			state.isLoading = true;
			state.error = undefined;
			return serviceAdapter.removeAll(state);
		});
		builder.addCase(serviceClientOnlyActions.setList, (state, action) => {
			state.isLoading = false;
			state.error = undefined;
			state.list = action.payload;
		});
	},
});

export type TServiceSlice = EntityState<TServiceVM> & {
	data?: TServiceCreate;
	isLoading: boolean;
	error?: string;
	search: string;
	subcategoryId?: number | null;
	currentPage: number;
	totalPages: number;
	sizePage: number;
	status?: string | null;
	list: TServiceVM[];
};

export default serviceSlice;
