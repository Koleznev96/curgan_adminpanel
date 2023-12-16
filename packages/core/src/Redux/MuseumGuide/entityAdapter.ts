import {createEntityAdapter} from '@reduxjs/toolkit';
import {PartialBy} from '@infomat/core/src/Types/PartialBy';

export const museumGuideAdapter = createEntityAdapter<TMuseumGuideVM>({
	selectId: (museum: TMuseumGuideVM) => museum.id,
});

export type TMuseumGuideCreate = {
	id?: number;
	title?: string;
	titleEn?: string;
	status?: string;
	description?: string;
	descriptionEn?: string;
	url?: string;
};

export type TMuseumGuideVM = {
	id: number;
	title?: string;
	titleEn?: string;
	status?: string;
	description?: string;
	descriptionEn?: string;
};

export type TMuseumGuide = PartialBy<TMuseumGuideVM, 'id'>;
