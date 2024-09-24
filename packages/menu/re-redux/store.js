import {  legacy_createStore as createStore  } from 'redux';
import MenuReducer from './menuReducer';

const store = createStore(MenuReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;