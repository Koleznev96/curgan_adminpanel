import {put, select} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';
import _ from 'lodash';

import {museumGuideClientToServerActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientToServerActions';
import {museumGuideClientOnlyActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientOnlyActions';
import {TMuseumGuideVM} from '@infomat/core/src/Redux/MuseumGuide/entityAdapter';
import {TRespounse} from '@infomat/core/src/Types/PartialBy';
import {selectMuseumGuideSizePage} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideSizePage';
import {selectMuseumGuideCurrentPage} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideCurrentPage';
import {selectMuseumGuideSearch} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideSearch';
import {selectMuseumGuideStatus} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideStatus';
import {museumGuideService} from '@infomat/core/src/Services/Api/museumGuide.service';

const getListSaga = function* ({
	payload: {size, page, search, status},
}: ReturnType<typeof museumGuideClientToServerActions.getList>) {
	try {
		const sizeUp = yield* select(selectMuseumGuideSizePage);
		const pageUp = yield* select(selectMuseumGuideCurrentPage);
		const searchUp = yield* select(selectMuseumGuideSearch);
		const statusUp = yield* select(selectMuseumGuideStatus);
		const response: AxiosResponse = yield museumGuideService.getList({
			size: size ?? sizeUp,
			page: page ?? pageUp,
			search: search ?? searchUp,
			status: _.isUndefined(status) ? statusUp : status,
		});
		const del = size || sizeUp;
		const data: TRespounse<TMuseumGuideVM> = response.data;
		yield* put(museumGuideClientOnlyActions.setTotalPages(Math.ceil(data.total / del)));
		yield* put(museumGuideClientOnlyActions.upsertMany(data.rows));
	} catch (error) {
		yield* put(museumGuideClientOnlyActions.stopLoading());
	}
};

export default getListSaga;
