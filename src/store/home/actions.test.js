import * as actions from './actions';
import listItemData from '../../../data-for-testing';

describe('actions', () => {
  it('should dispatch an action to fetch the home Data', () => {
    const payload = { id : 1}
    const expectedAction = {
      type: 'FETCH_DATA_REQUEST',
      payload:payload,
    };
    expect(actions.fetchCubytCategoriesRequest(payload)).toEqual(expectedAction);
  });

  it('should dispatch an action to update the vote count', () => {
    const payload = {libraryData: listItemData, key: 0 }
   const expectedAction = {
      type: 'UPDATE_VOTE_COUNT_REQUEST',
      payload:payload,
    };
    expect(actions.fetchCubytCategoriesRequest(payload)).toEqual(expectedAction);
  });
});