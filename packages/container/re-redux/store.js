import { legacy_createStore as createStore,combineReducers } from 'redux';

import TodoReducer from './todoReducer';
import MenuReducer from './menuReducer';
// import CounterReducer from './counterReducer';

// const store = createStore(CounterReducer);

const rootReducer = combineReducers({
    menu: MenuReducer,
    todo:TodoReducer
    // Add other global reducers here
  });
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    
export default store;