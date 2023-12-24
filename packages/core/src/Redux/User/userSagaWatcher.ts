import {takeEvery} from 'typed-redux-saga';

import loginUserSaga from './Sagas/loginUserSaga';
import {userClientToServerActions} from './Actions/userClientToServerActions';
import getStatisticsSaga from './Sagas/getStatisticsSaga';

function* userSagaWatcher() {
	yield* takeEvery(userClientToServerActions.login.type, loginUserSaga);
	yield* takeEvery(userClientToServerActions.getStatistics.type, getStatisticsSaga);
}

export default userSagaWatcher;
