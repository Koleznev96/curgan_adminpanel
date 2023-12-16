import IRootState from '@infomat/core/src/Redux/IRootState';
import {TDefaultSelectors} from '@infomat/core/src/Redux/TDefaultSelectors';
import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';
import {TMuseumGuideVM, museumGuideAdapter} from '@infomat/core/src/Redux/MuseumGuide/entityAdapter';

const {selectIds, selectById, selectAll} = museumGuideAdapter.getSelectors<IRootState>(
	(state) => state[EnumStore.MUSEUM_GUIDE],
) as TDefaultSelectors<TMuseumGuideVM, number>;

export const selectMuseumGuideIds = selectIds;
export const selectMuseumGuideVMById = selectById;
export const selectMuseumGuideVMs = selectAll;
