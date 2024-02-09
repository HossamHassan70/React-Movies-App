import { combineReducers } from 'redux';
import favoritesReducer from './AddToFav';
import moviesReducer from './MoviesReducer';

const CombinedRed = combineReducers({
    favorites: favoritesReducer,
    movies: moviesReducer
});

export default CombinedRed;
