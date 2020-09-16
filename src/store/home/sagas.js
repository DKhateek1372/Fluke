import { call, all, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/index';

import {
  CubytCategoriesAction
} from './actions';

function* handleCubytCategories() {
  try {
    const response = yield call(api.getCubytCategories);
    yield put(CubytCategoriesAction.fetchCubytCategoriesSuccess(response.data));
  } catch (error) {
    yield put(CubytCategoriesAction.fetchCubytCategoriesError(error));
  }
}

export function* cubytSagas() {
  yield all([
    yield takeLatest(CubytCategoriesAction.FETCH_CUBYT_CATEGORY_REQUEST, handleCubytCategories),
 ]);
}