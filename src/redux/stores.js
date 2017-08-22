import {createStore, applyMiddleware, compose} from 'redux';
import ApplicationReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export default function (initialState = {}) {
  const loggerMiddleware = createLogger();
  const middleware = [thunk, loggerMiddleware]
  const store = createStore(
    ApplicationReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}
