import {isUndefined} from 'lodash';
import api, {replaceEmptyStringsWithUndefined} from './moduleAxios';

import {TMuseumGuideCreate} from '../../Redux/MuseumGuide/entityAdapter';

export const museumGuideService = {
	getList,
	getItem,
	deleteItem,
	updateItem,
	createItem,
};

async function getList({
	page = 0,
	size = 10,
	search,
	status,
}: {
	page?: number;
	size?: number;
	search?: string;
	status?: string | null;
}) {
	return api.get(
		`/museumGuide?page=${page}&size=${size}${!isUndefined(search) ? '&search=' + search : ''}${
			!isUndefined(status) && status !== null ? '&status=' + status : ''
		}`,
	);
}

async function getItem(id: number) {
	return api.get(`/museumGuide/${id}`);
}

async function deleteItem(id: number) {
	return api.delete(`/museumGuide/${id}`);
}

async function updateItem({id, ...data}: TMuseumGuideCreate) {
	return api.patch(`/museumGuide/${id}`, replaceEmptyStringsWithUndefined(data), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

async function createItem({id, ...data}: TMuseumGuideCreate) {
	return api.post(`/museumGuide`, replaceEmptyStringsWithUndefined(data), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
