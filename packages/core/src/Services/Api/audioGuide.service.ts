import {isUndefined} from 'lodash';
import api, {replaceEmptyStringsWithUndefined} from './moduleAxios';

import {TAudioGuideCreate} from '../../Redux/AudioGuide/entityAdapter';

export const audioGuideService = {
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
		`/audioGuide?page=${page}&size=${size}${!isUndefined(search) ? '&search=' + search : ''}${
			!isUndefined(status) && status !== null ? '&status=' + status : ''
		}`,
	);
}

async function getItem(id: number) {
	return api.get(`/audioGuide/${id}`);
}

async function deleteItem(id: number) {
	return api.delete(`/audioGuide/${id}`);
}

async function updateItem({id, audio, ...data}: TAudioGuideCreate) {
	const formData = new FormData();
	formData.append(
		'audioGuide',
		new Blob([JSON.stringify(replaceEmptyStringsWithUndefined(data))], {type: 'application/json'}),
	);
	if (audio?.url instanceof File) {
		formData.append('audio', audio.url);
	}

	return api.patch(`/audioGuide/${id}`, formData);
}

async function createItem({id, audio, ...data}: TAudioGuideCreate) {
	const formData = new FormData();
	formData.append(
		'audioGuide',
		new Blob([JSON.stringify(replaceEmptyStringsWithUndefined(data))], {type: 'application/json'}),
	);
	if (audio?.url instanceof File) {
		formData.append('audio', audio.url);
	}

	return api.post(`/audioGuide`, formData);
}
