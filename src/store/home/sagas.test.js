import {  put } from 'redux-saga/effects';
import { CubytCategoriesAction } from './actions';

it('should fail if not authenticated', () => {
    const gen = CubytCategoriesAction.handleCubytCategories();
  
    expect(gen.next().value).toEqual((CubytCategoriesAction.fetchCubytCategoriesSuccess()));
    expect(gen.next(false).value).toEqual(put(CubytCategoriesAction.fetchCubytCategoriesError()));
    expect(gen.next().done).toBeTruthy();
  });