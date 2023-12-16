import IRootState from '@infomat/core/src/Redux/IRootState';
import {TDefaultSelectors} from '@infomat/core/src/Redux/TDefaultSelectors';
import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';
import {TServiceVM, serviceAdapter} from '@infomat/core/src/Redux/Service/entityAdapter';

const {selectIds, selectById, selectAll} = serviceAdapter.getSelectors<IRootState>(
	(state) => state[EnumStore.SERVICE],
) as TDefaultSelectors<TServiceVM, number>;

export const selectServiceIds = selectIds;
export const selectServiceVMById = selectById;
export const selectServiceVMs = selectAll;
