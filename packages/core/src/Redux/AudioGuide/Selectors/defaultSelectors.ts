import IRootState from '@infomat/core/src/Redux/IRootState';
import {TDefaultSelectors} from '@infomat/core/src/Redux/TDefaultSelectors';
import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';
import {TAudioGuideVM, audioGuideAdapter} from '@infomat/core/src/Redux/AudioGuide/entityAdapter';

const {selectIds, selectById, selectAll} = audioGuideAdapter.getSelectors<IRootState>(
	(state) => state[EnumStore.AUDIO_GUIDE],
) as TDefaultSelectors<TAudioGuideVM, number>;

export const selectAudioGuideIds = selectIds;
export const selectAudioGuideVMById = selectById;
export const selectAudioGuideVMs = selectAll;
