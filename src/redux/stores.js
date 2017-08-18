import {createStore, applyMiddleware} from 'redux';
import ApplicationReducer from './reducers';
import thunk from 'redux-thunk';

export default function (initialState = {}) {
  const store = createStore(
    ApplicationReducer,
    initialState,
    applyMiddleware(thunk)
  );

  return store;
}
