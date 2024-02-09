import CombinedRed from './reducers/CombinedRed';
import { applyMiddleware, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk';

const store = legacy_createStore(CombinedRed, applyMiddleware(thunk));

export default store;