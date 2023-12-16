import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';
import {ClientOnlyActions} from '@infomat/core/src/Actions/ActionCreator';
import {TInformationElementVM, TInformationVM} from '@infomat/core/src/Redux/Information/type';
import {EnumInfoType} from '@infomat/core/src/BusinessLogic/EnumInfoType';

enum EnumClientToServerActions {
	GET_DETAILS = 'GET_DETAILS',
	UPDATE_DETAILS = 'UPDATE_DETAILS',
	GET_INFO = 'GET_INFO',
	UPDATE_INFO = 'UPDATE_INFO',
}

class InformationClientToServerActions extends ClientOnlyActions<EnumStore.INFORMATION> {
	readonly scope = EnumStore.INFORMATION;

	getDeatails = this.createAction(EnumClientToServerActions.GET_DETAILS);

	updateDetails = this.createAction(EnumClientToServerActions.UPDATE_DETAILS, this.getPrepareAction<TInformationVM>());

	getInfo = this.createAction(EnumClientToServerActions.GET_INFO, this.getPrepareAction<EnumInfoType>());

	updateInfo = this.createAction(
		EnumClientToServerActions.UPDATE_INFO,
		this.getPrepareAction<TInformationElementVM & {type: EnumInfoType}>(),
	);
}

export const informationClientToServerActions = new InformationClientToServerActions();
