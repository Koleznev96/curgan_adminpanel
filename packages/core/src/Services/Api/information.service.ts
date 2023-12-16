import api from './moduleAxios';

import {TInformationElementVM, TInformationVM} from '../../Redux/Information/type';
import {EnumInfoType} from '../../BusinessLogic/EnumInfoType';

export const informationService = {
	getData,
	updateData,
	getDataElement,
	updateDataElement,
};

const getUrl = (type: EnumInfoType) => `/info/${type}`;

async function getData() {
	return api.get(`/city`);
}

async function updateData(data: TInformationVM) {
	return api.patch(`/city`, data, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

async function getDataElement(type: EnumInfoType) {
	return api.get(getUrl(type));
}

async function updateDataElement(data: TInformationElementVM, type: EnumInfoType) {
	return api.patch(getUrl(type), data, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
