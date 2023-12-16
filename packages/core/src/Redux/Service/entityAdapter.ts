import {createEntityAdapter} from '@reduxjs/toolkit';
import {PartialBy} from '@infomat/core/src/Types/PartialBy';
import {TFile, TFileCrop, TFrameCrop} from '@infomat/core/src/Types/media';

export const serviceAdapter = createEntityAdapter<TServiceVM>({
	selectId: (places: TServiceVM) => places.id,
});

export type TServiceCreate = {
	id?: number;
	title: string;
	titleEn?: string;
	status: string;
	cover?: TFileCrop;
	photos?: TFileCrop[];
	address?: {
		address?: string;
		addressEn?: string;
		latitude?: number;
		longitude?: number;
	};
	availabilities?: TAvailabilitie[];
	phone?: string;
	email?: string;
	website?: string;
	description?: string;
	descriptionEn?: string;
	coverFrame?: TFrameCrop;
	frames?: TFrameCrop[];
	categoryId?: number;
	category?: {id?: number};
	photoIdsForRemoving?: number[];
};

export type TAvailabilitie = {
	id?: number;
	enable: boolean;
	day: number;
	start: string;
	end?: string;
};

export type TServiceVM = {
	id: number;
	title: string;
	titleEn?: string;
	status: string;
	cover?: TFile;
	photos?: TFile[];
	address?: {
		address?: string;
		addressEn?: string;
		latitude?: number;
		longitude?: number;
	};
	availabilities?: TAvailabilitie[];
};

export type TService = PartialBy<TServiceVM, 'id'>;
