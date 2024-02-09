const initialState = {
    movies: [],
    error: null,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES_SUCCESS':
            return {
                ...state,
                movies: action.payload,
                error: null,
            };

        case 'FETCH_MOVIES_ERROR':
            return {
                ...state,
                movies: [], 
                error: action.payload,
            };

        default:
            return state;
    }
};


export default moviesReducer;
