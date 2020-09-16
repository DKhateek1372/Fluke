
import { all, call } from 'redux-saga/effects';

import { cubytSagas } from './home/sagas';

export default function* rootSaga() {
  yield all([
    call(cubytSagas),
  ]);
}

