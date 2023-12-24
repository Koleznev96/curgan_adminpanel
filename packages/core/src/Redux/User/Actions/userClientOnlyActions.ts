import {ClientOnlyActions} from '@infomat/core/src/Actions/ActionCreator';
import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';

enum EnumClientOnlyActions {
	SET_ERRORS = 'SET_ERRORS',
	RESET_STORE = 'RESET_STORE',
	UPSET_DETAILES = 'UPSET_DETAILES',
	UPDATE_NETWORK_STATUS = 'UPDATE_NETWORK_STATUS',
	LOGOUT = 'LOGOUT',
	LOGIN_IN = 'LOGIN_IN',
	SET_STATISTICS = 'SET_STATISTICS',
	STOP_LOADING = 'STOP_LOADING',
}

class UserClientOnlyActions extends ClientOnlyActions<EnumStore.USER> {
	readonly scope = EnumStore.USER;

	upsetDetailes = this.createAction(
		EnumClientOnlyActions.UPSET_DETAILES,
		this.getPrepareAction<{token?: string; login?: string; error?: string}>(),
	);

	setErrors = this.createAction(
		EnumClientOnlyActions.SET_ERRORS,
		this.getPrepareAction<{errorCoordinates?: string; errorAddress?: string}>(),
	);

	updateNetworkStatus = this.createAction(
		EnumClientOnlyActions.UPDATE_NETWORK_STATUS,
		this.getPrepareAction<boolean>(),
	);

	stopLoading = this.createAction(EnumClientOnlyActions.STOP_LOADING);

	logout = this.createAction(EnumClientOnlyActions.LOGOUT);

	resetStore = this.createAction(EnumClientOnlyActions.RESET_STORE);

	login = this.createAction(EnumClientOnlyActions.LOGIN_IN, this.getPrepareAction<string>());

	setStatistics = this.createAction(
		EnumClientOnlyActions.SET_STATISTICS,
		this.getPrepareAction<{
			users: number;
			publishedPlaces: number;
			totalPlaces: number;
			publishedEvents: number;
			totalEvents: number;
			publishedServices: number;
			totalServices: number;
			categoriesStatistics: [
				{
					id: number;
					title: string;
					titleEn: string;
					icon: {
						id: number;
						url: string;
					};
					publishedServices: number;
					totalServices: number;
				},
			];
		}>(),
	);
}

export const userClientOnlyActions = new UserClientOnlyActions();
