import {takeEvery} from 'typed-redux-saga';

import getListSaga from './Sagas/getListSaga';
import updateItemSaga from './Sagas/updateItemSaga';
import createItemSaga from './Sagas/createItemSaga';
import deleteItemSaga from './Sagas/deleteItemSaga';
import getDataSaga from './Sagas/getDataSaga';
import {museumGuideClientToServerActions} from './Actions/museumGuideClientToServerActions';

function* museumGuideSagaWatcher() {
	yield* takeEvery(museumGuideClientToServerActions.getList.type, getListSaga);
	yield* takeEvery(museumGuideClientToServerActions.get.type, getDataSaga);
	yield* takeEvery(museumGuideClientToServerActions.updateCategory.type, updateItemSaga);
	yield* takeEvery(museumGuideClientToServerActions.createCategory.type, createItemSaga);
	yield* takeEvery(museumGuideClientToServerActions.deleteCategory.type, deleteItemSaga);
}

export default museumGuideSagaWatcher;
