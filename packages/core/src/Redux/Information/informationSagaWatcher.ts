import {takeEvery} from 'typed-redux-saga';

import getInformationSaga from './Sagas/getInformationSaga';
import updateInformationSaga from './Sagas/updateInformationSaga';
import {informationClientToServerActions} from './Actions/informationClientToServerActions';
import getInformationElementSaga from './Sagas/getInformationElementSaga';
import updateInformationElementSaga from './Sagas/updateInformationElementSaga';

function* informationSagaWatcher() {
	yield* takeEvery(informationClientToServerActions.getDeatails.type, getInformationSaga);
	yield* takeEvery(informationClientToServerActions.updateDetails.type, updateInformationSaga);
	yield* takeEvery(informationClientToServerActions.getInfo.type, getInformationElementSaga);
	yield* takeEvery(informationClientToServerActions.updateInfo.type, updateInformationElementSaga);
}

export default informationSagaWatcher;
