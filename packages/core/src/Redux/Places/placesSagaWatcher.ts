import {takeEvery} from 'typed-redux-saga';

import getListSaga from './Sagas/getListSaga';
import updateItemSaga from './Sagas/updateItemSaga';
import createItemSaga from './Sagas/createItemSaga';
import deleteItemSaga from './Sagas/deleteItemSaga';
import getDataSaga from './Sagas/getDataSaga';
import {placesClientToServerActions} from './Actions/placesClientToServerActions';
import getSearchSaga from './Sagas/getSearchSaga';

function* placesSagaWatcher() {
	yield* takeEvery(placesClientToServerActions.getList.type, getListSaga);
	yield* takeEvery(placesClientToServerActions.getSearch.type, getSearchSaga);
	yield* takeEvery(placesClientToServerActions.get.type, getDataSaga);
	yield* takeEvery(placesClientToServerActions.updateCategory.type, updateItemSaga);
	yield* takeEvery(placesClientToServerActions.createCategory.type, createItemSaga);
	yield* takeEvery(placesClientToServerActions.deleteCategory.type, deleteItemSaga);
}

export default placesSagaWatcher;
