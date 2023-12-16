import {ClientOnlyActions} from '@infomat/core/src/Actions/ActionCreator';
import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';
import {TInformationElementVM, TInformationVM} from '@infomat/core/src/Redux/Information/type';

enum EnumClientOnlyActions {
	RESET_STORE = 'RESET_STORE',
	UPSET_DETAILES = 'UPSET_DETAILES',
	UPSET_INFO = 'UPSET_INFO',
	STOP_LOADING = 'STOP_LOADING',
}

class InformationClientOnlyActions extends ClientOnlyActions<EnumStore.INFORMATION> {
	readonly scope = EnumStore.INFORMATION;

	upsetDetailes = this.createAction(
		EnumClientOnlyActions.UPSET_DETAILES,
		this.getPrepareAction<TInformationVM & {error?: string}>(),
	);

	upsetInfo = this.createAction(
		EnumClientOnlyActions.UPSET_INFO,
		this.getPrepareAction<TInformationElementVM & {error?: string}>(),
	);

	stopLoading = this.createAction(EnumClientOnlyActions.STOP_LOADING);

	resetStore = this.createAction(EnumClientOnlyActions.RESET_STORE);
}

export const informationClientOnlyActions = new InformationClientOnlyActions();
