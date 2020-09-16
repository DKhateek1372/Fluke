export const CubytCategoriesAction = {

    
    FETCH_CUBYT_CATEGORY_REQUEST: 'FETCH_CUBYT_CATEGORY_REQUEST',
    FETCH_CUBYT_CATEGORY_SUCCESS: 'FETCH_CUBYT_CATEGORY_SUCCESS',
    FETCH_CUBYT_CATEGORY_ERROR: 'FETCH_CUBYT_CATEGORY_ERROR',

    fetchCubytCategoriesRequest: params => ({
        type: CubytCategoriesAction.FETCH_CUBYT_CATEGORY_REQUEST,
        payload: params
    }),

    fetchCubytCategoriesSuccess: data => ({
        type: CubytCategoriesAction.FETCH_CUBYT_CATEGORY_SUCCESS,
        payload: data
    }),

    fetchCubytCategoriesError: message => ({
        type: CubytCategoriesAction.FETCH_CUBYT_CATEGORY_ERROR,
        payload: message
    }),

};







