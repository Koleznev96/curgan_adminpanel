import {isUndefined} from 'lodash';
import api, {replaceEmptyStringsWithUndefined} from './moduleAxios';

import {TCategoryObjectCreate} from '../../Redux/CategoryObject/entityAdapter';

export const categoryObjectService = {
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
		`/category?page=${page}&size=${size}${!isUndefined(search) ? '&search=' + search : ''}${
			!isUndefined(status) && status !== null ? '&status=' + status : ''
		}`,
	);
}

async function getItem(id: number) {
	return api.get(`/category/${id}`);
}

async function deleteItem(id: number) {
	return api.delete(`/category/${id}`);
}

async function updateItem({id, icon, cover, ...data}: TCategoryObjectCreate) {
	const formData = new FormData();
	formData.append(
		'category',
		new Blob([JSON.stringify(replaceEmptyStringsWithUndefined(data))], {
			type: 'application/json',
		}),
	);
	if (icon?.url instanceof File) {
		formData.append('icon', icon.url);
	}
	if (cover?.url3x2 instanceof File) {
		formData.append('cover', cover.url3x2);
	}

	return api.patch(`/category/${id}`, formData);
}

async function createItem({id, icon, cover, ...data}: TCategoryObjectCreate) {
	const formData = new FormData();
	formData.append(
		'category',
		new Blob([JSON.stringify(replaceEmptyStringsWithUndefined(data))], {
			type: 'application/json',
		}),
	);
	if (icon?.url instanceof File) {
		formData.append('icon', icon.url);
	}
	if (cover?.url3x2 instanceof File) {
		formData.append('cover', cover.url3x2);
	}

	return api.post(`/category`, formData);
}
