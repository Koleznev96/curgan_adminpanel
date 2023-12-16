import IRootState from '@infomat/core/src/Redux/IRootState';
import EnumStore from '@infomat/core/src/BusinessLogic/EnumStore';

export const getAudioGuideState = (state: IRootState) => state[EnumStore.AUDIO_GUIDE];
