import { createStore, applyMiddleware } from 'redux'
import thunk                            from 'redux-thunk'
import reducer                          from '../reducer'

const middleware = [ thunk ];

const getStore = (preloadedState) => {
  return createStore(
    reducer(),
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default getStore