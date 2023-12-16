import {fork} from 'typed-redux-saga';

import startRootSaga from '@infomat/core/src/Redux/startRootSaga';
import sagaMiddleware from '@infomat/core/src/Middleware/sagaMiddleware';
import geocodingSagaWatcher from '@infomat/core/src/Redux/Geocoding/geocodingSagaWatcher';
import userSagaWatcher from '@infomat/core/src/Redux/User/userSagaWatcher';
import categoryObjectSagaWatcher from '@infomat/core/src/Redux/CategoryObject/categoryObjectSagaWatcher';
import notificationsSagaWatcher from '@infomat/core/src/Redux/Notifications/notificationsSagaWatcher';
import informationSagaWatcher from '@infomat/core/src/Redux/Information/informationSagaWatcher';
import placesSagaWatcher from '@infomat/core/src/Redux/Places/placesSagaWatcher';
import serviceSagaWatcher from '@infomat/core/src/Redux/Service/serviceSagaWatcher';
import eventsSagaWatcher from '@infomat/core/src/Redux/Events/eventsSagaWatcher';
import audioGuideSagaWatcher from '@infomat/core/src/Redux/AudioGuide/audioGuideSagaWatcher';
import museumGuideSagaWatcher from '@infomat/core/src/Redux/MuseumGuide/museumGuideSagaWatcher';

import routingSagaWatcher from './Routing/routingSagaWatcher';

/**
 * @link https://words.thisishugo.com/how-to-pass-an-api-client-to-a-redux-saga-f35170356c53
 * @constructor
 */
function* rootSaga() {
	yield* fork(museumGuideSagaWatcher);
	yield* fork(geocodingSagaWatcher);
	yield* fork(userSagaWatcher);
	yield* fork(routingSagaWatcher);
	yield* fork(notificationsSagaWatcher);
	yield* fork(serviceSagaWatcher);
	yield* fork(placesSagaWatcher);
	yield* fork(eventsSagaWatcher);
	yield* fork(informationSagaWatcher);
	yield* fork(categoryObjectSagaWatcher);
	yield* fork(audioGuideSagaWatcher);
}

const sagaRunner = startRootSaga(sagaMiddleware, rootSaga);

export default sagaRunner;
