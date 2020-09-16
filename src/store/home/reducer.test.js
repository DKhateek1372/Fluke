import cubytCategoriesReducer from './reducer';
import { CubytCategoriesAction } from './actions';

const initialState = {
  loading: true,
  cubytCategories :[]
};

describe('cubytCategoriesReducer reducer', () => {
 
  it('returns the initial state', () => {
    expect(cubytCategoriesReducer(undefined, {})).toEqual({
      loading: true,
      cubytCategories: [],
 
    });
  });

  it('should return the initial state', () => {
    expect(cubytCategoriesReducer(initialState, { type: CubytCategoriesAction.FETCH_CUBYT_CATEGORY_SUCCESS})).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return the updated data state', () => {
    expect(cubytCategoriesReducer(initialState,{
        type: CubytCategoriesAction.FETCH_CUBYT_CATEGORY_SUCCESS,
     })).toEqual({
      loading: false,
      cubytCategories :[]
    });
  });

  it('handles failure', () => {
    expect(cubytCategoriesReducer(initialState, { type: CubytCategoriesAction.FETCH_CUBYT_CATEGORY_ERROR  })).toEqual({
      ...initialState,
      loading: true,
      errors: '',
    });
  });
  
});

