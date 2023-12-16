import {createEntityAdapter} from '@reduxjs/toolkit';
import {PartialBy} from '@infomat/core/src/Types/PartialBy';
import {TFile, TFileCrop, TFrameCrop} from '@infomat/core/src/Types/media';

export const placesAdapter = createEntityAdapter<TPlacesVM>({
	selectId: (places: TPlacesVM) => places.id,
});

export type TPlacesCreate = {
	id?: number;
	title?: string;
	titleEn?: string;
	status?: string;
	description?: string;
	descriptionEn?: string;
	cover?: TFileCrop;
	photos?: TFileCrop[];
	frames?: TFrameCrop[];
	coverFrame?: TFrameCrop;
	photoIdsForRemoving?: number[];
	address?: {
		address?: string;
		addressEn?: string;
		latitude?: number;
		longitude?: number;
	};
};

export type TPlacesVM = {
	id: number;
	title: string;
	titleEn: string;
	status: string;
	cover: TFile;
	address?: {
		address?: string;
		addressEn?: string;
		latitude?: number;
		longitude?: number;
	};
};

export type TPlaces = PartialBy<TPlacesVM, 'id'>;
