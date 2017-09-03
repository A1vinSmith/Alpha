import { createStore, applyMiddleware } from 'redux'
import thunk                            from 'redux-thunk'
import reducer                          from '../reducer'

const middleware = [ thunk ]

const getStore = (navReducer, preloadedState) => {
  const store = createStore(
    reducer(navReducer),
    preloadedState,
    applyMiddleware(...middleware)
  )
  return store
}

export default getStore