import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import cubytCategoriesReducer from './home/reducer';

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    cubytCategories: cubytCategoriesReducer,
})