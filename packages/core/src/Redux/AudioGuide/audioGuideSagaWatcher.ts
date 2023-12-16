import {takeEvery} from 'typed-redux-saga';

import getListSaga from './Sagas/getListSaga';
import updateItemSaga from './Sagas/updateItemSaga';
import createItemSaga from './Sagas/createItemSaga';
import deleteItemSaga from './Sagas/deleteItemSaga';
import getDataSaga from './Sagas/getDataSaga';
import {audioGuideClientToServerActions} from './Actions/audioGuideClientToServerActions';

function* audioGuideSagaWatcher() {
	yield* takeEvery(audioGuideClientToServerActions.getList.type, getListSaga);
	yield* takeEvery(audioGuideClientToServerActions.get.type, getDataSaga);
	yield* takeEvery(audioGuideClientToServerActions.updateCategory.type, updateItemSaga);
	yield* takeEvery(audioGuideClientToServerActions.createCategory.type, createItemSaga);
	yield* takeEvery(audioGuideClientToServerActions.deleteCategory.type, deleteItemSaga);
}

export default audioGuideSagaWatcher;
