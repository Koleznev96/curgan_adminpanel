import {isUndefined} from 'lodash';
import api, {replaceEmptyStringsWithUndefined} from './moduleAxios';
import _ from 'lodash';

import {TServiceCreate} from '../../Redux/Service/entityAdapter';

export const serviceService = {
	getList,
	getItem,
	deleteItem,
	updateItem,
	createItem,
};

const URL = '/service';

async function getList({
	page = 0,
	size = 10,
	search,
	status,
	categoryId,
}: {
	page?: number;
	size?: number;
	search?: string;
	status?: string | null;
	categoryId?: number | null;
}) {
	return api.get(
		`${URL}?page=${page}&size=${size}${!isUndefined(search) ? '&search=' + search : ''}${
			!isUndefined(status) && status !== null ? '&status=' + status : ''
		}${!isUndefined(categoryId) && categoryId !== null ? '&categoryId=' + categoryId : ''}`,
	);
}

async function getItem(id: number) {
	return api.get(`${URL}/${id}`);
}

async function deleteItem(id: number) {
	return api.delete(`${URL}/${id}`);
}

async function updateItem({id, cover, photos, frames, availabilities, ...data}: TServiceCreate) {
	const formData = new FormData();
	const framesV = _.filter(frames, (item) => !_.isUndefined(item) && item.partName !== null);
	const dataValid = {...data, frames: framesV.length ? framesV : undefined};
	formData.append(
		'service',
		new Blob(
			[
				JSON.stringify({
					...replaceEmptyStringsWithUndefined(dataValid),
					availabilities: _.map(availabilities, (item) =>
						!item.enable
							? {
									enable: item.enable,
									start: !item.start.length ? '00:00' : item.start,
									day: item.day,
									id: item.id,
									end: !item.end?.length ? '00:00' : item.end,
							  }
							: item,
					),
				}),
			],
			{
				type: 'application/json',
			},
		),
	);
	if (cover?.url3x2 instanceof File) {
		formData.append('cover', cover.url3x2);
	}
	if (photos) {
		for (const photo of photos) {
			if (photo?.url3x2 instanceof File) {
				formData.append(photo.partName || 'photo', photo?.url3x2);
			}
		}
	}

	return api.patch(`${URL}/${id}`, formData);
}

async function createItem({cover, photos, frames, availabilities, ...data}: TServiceCreate) {
	const formData = new FormData();
	const framesV = _.filter(frames, (item) => !_.isUndefined(item) && item.partName !== null);
	const dataValid = {...data, frames: framesV.length ? framesV : undefined};
	formData.append(
		'service',
		new Blob(
			[
				JSON.stringify({
					...replaceEmptyStringsWithUndefined(dataValid),
					availabilities: _.map(availabilities, (item) =>
						!item.enable
							? {
									enable: item.enable,
									start: !item.start.length ? '00:00' : item.start,
									day: item.day,
									id: item.id,
									end: !item.end?.length ? '00:00' : item.end,
							  }
							: item,
					),
				}),
			],
			{
				type: 'application/json',
			},
		),
	);
	if (cover?.url3x2 instanceof File) {
		formData.append('cover', cover.url3x2);
	}
	if (photos) {
		for (const photo of photos) {
			if (photo?.url3x2 instanceof File) {
				formData.append(photo.partName || 'photo', photo?.url3x2);
			}
		}
	}

	return api.post(`${URL}`, formData);
}
