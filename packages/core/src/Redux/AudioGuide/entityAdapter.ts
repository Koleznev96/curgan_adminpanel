import {createEntityAdapter} from '@reduxjs/toolkit';
import {PartialBy} from '@infomat/core/src/Types/PartialBy';
import {TFile, TFileLocal, TVideo} from '@infomat/core/src/Types/media';

export const audioGuideAdapter = createEntityAdapter<TAudioGuideVM>({
	selectId: (audio: TAudioGuideVM) => audio.id,
});

export type TStop = {
	lat?: number;
	lon?: number;
};

export type TAudioGuideCreate = {
	id?: number;
	title?: string;
	titleEn?: string;
	status?: string;
	audio?: TVideo;
	description?: string;
	descriptionEn?: string;
	polygon?: TStop[];
};

export type TAudioGuideVM = {
	id: number;
	title?: string;
	titleEn?: string;
	status?: string;
	audio?: TFile;
	description?: string;
	descriptionEn?: string;
	polygon?: TStop[];
};

export type TAudioGuide = PartialBy<TAudioGuideVM, 'id'>;
