import {createEntityAdapter} from '@reduxjs/toolkit';
import {PartialBy} from '@infomat/core/src/Types/PartialBy';
import {TFile, TFileCrop, TFileLocal, TFrameCrop} from '../../Types/media';

export const categoryObjectAdapter = createEntityAdapter<TCategoryObjectVM>({
	selectId: (categoryObject: TCategoryObjectVM) => categoryObject.id,
});

export type TCategoryObjectCreate = {
	id?: number;
	cover: TFileCrop;
	title: string;
	titleEn: string;
	icon: TFile | TFileLocal;
	coverFrame?: TFrameCrop;
};

export type TCategoryObjectVM = {
	id: number;
	cover: TFile;
	title: string;
	titleEn: string;
	icon: TFile;
};

export type TCategoryObject = PartialBy<TCategoryObjectVM, 'id'>;
