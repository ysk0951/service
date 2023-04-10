import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import bucket from './modules/bucket';
const rootReducer = combineReducers({bucket});
const store = createStore(rootReducer);

export default store;
