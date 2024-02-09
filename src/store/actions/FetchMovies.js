export const fetchMoviesSuccess = (movies) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload: movies,
});

export const fetchMoviesError = (error) => ({
  type: 'FETCH_MOVIES_ERROR',
  payload: error, 
});
