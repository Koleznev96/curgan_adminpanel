import IRootState from '@infomat/core/src/Redux/IRootState';
import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';

export const getServiceState = (state: IRootState) => state[EnumStore.SERVICE];
