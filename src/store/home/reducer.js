import { CubytCategoriesAction } from './actions';

const initialState = {
  loading: true,
  cubytCategories:[],
  errors: false  
};

const cubytCategoriesReducer = (state = initialState, action) => {

  // fecth initial data from search //
  switch (action.type) {
    case CubytCategoriesAction.FETCH_CUBYT_CATEGORY_REQUEST: {
      return { ...state };
    }

    case CubytCategoriesAction.FETCH_CUBYT_CATEGORY_SUCCESS: {
      let data = Object.assign([], action.payload);
      !!data && data.forEach((element, index) => {
        element.key = index;
      });
      state.loading = false;
      state.cubytCategories = data;
      return state;
    }

    case CubytCategoriesAction.FETCH_CUBYT_CATEGORY_ERROR:
      {
        return {
          ...state,
          loading: true,
          errors:  action.payload
        };
      }
    default:
      return state;
  }
};

export default cubytCategoriesReducer;
