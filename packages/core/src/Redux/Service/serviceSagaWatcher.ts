import {takeEvery} from 'typed-redux-saga';

import getListSaga from './Sagas/getListSaga';
import updateItemSaga from './Sagas/updateItemSaga';
import createItemSaga from './Sagas/createItemSaga';
import deleteItemSaga from './Sagas/deleteItemSaga';
import getDataSaga from './Sagas/getDataSaga';
import getSearchSaga from './Sagas/getSearchSaga';
import {serviceClientToServerActions} from './Actions/serviceClientToServerActions';

function* serviceSagaWatcher() {
	yield* takeEvery(serviceClientToServerActions.getList.type, getListSaga);
	yield* takeEvery(serviceClientToServerActions.getSearch.type, getSearchSaga);
	yield* takeEvery(serviceClientToServerActions.get.type, getDataSaga);
	yield* takeEvery(serviceClientToServerActions.updateCategory.type, updateItemSaga);
	yield* takeEvery(serviceClientToServerActions.createCategory.type, createItemSaga);
	yield* takeEvery(serviceClientToServerActions.deleteCategory.type, deleteItemSaga);
}

export default serviceSagaWatcher;
