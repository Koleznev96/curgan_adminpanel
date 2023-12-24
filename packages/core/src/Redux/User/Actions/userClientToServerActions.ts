import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';
import {ClientOnlyActions} from '@infomat/core/src/Actions/ActionCreator';

enum EnumClientToServerActions {
	LOGIN = 'LOGIN',
	GET_STATISTICS = 'GET_STATISTICS',
}

class UserClientToServerActions extends ClientOnlyActions<EnumStore.USER> {
	readonly scope = EnumStore.USER;

	login = this.createAction(
		EnumClientToServerActions.LOGIN,
		this.getPrepareAction<{password: string; login: string}>(),
	);

	getStatistics = this.createAction(EnumClientToServerActions.GET_STATISTICS);
}

export const userClientToServerActions = new UserClientToServerActions();
