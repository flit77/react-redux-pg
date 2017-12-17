import { combineReducers } from 'redux';
import { createStore, compose } from 'redux';
import todos from './reducers';

const rootReducer = combineReducers({
  todos
});

export default createStore(
  rootReducer,
  undefined,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);
