import IRootState from '@infomat/core/src/Redux/IRootState';
import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';

export const getMuseumGuideState = (state: IRootState) => state[EnumStore.MUSEUM_GUIDE];
