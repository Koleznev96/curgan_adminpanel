import {put} from 'typed-redux-saga';
import {AxiosResponse} from 'axios';

import geocodingClientOnlyActions from '@infomat/core/src/Redux/Geocoding/Actions/geocodingClientOnlyActions';
import {geocodingClientToServerActions} from '@infomat/core/src/Redux/Geocoding/Actions/geocodingClientToServerActions';
import {TAddress} from '@infomat/core/src/Redux/Geocoding/entityAdapter';
import {geocodingService} from '@infomat/core/src/Services/Api/geocoding.service';

const searchForGeocodingSaga = function* ({payload}: ReturnType<typeof geocodingClientToServerActions.getAddress>) {
	try {
		const response: AxiosResponse = yield geocodingService.getForGeocoding(payload);
		const data: TAddress = response.data;
		yield* put(geocodingClientOnlyActions.upsertCoordinates(data));
	} catch (error) {
		yield* put(geocodingClientOnlyActions.stopLoading());
		yield* put(geocodingClientOnlyActions.setErrors({errorCoordinates: 'error'}));
	}
};

export default searchForGeocodingSaga;
