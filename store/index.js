import { createStore, applyMiddleware } from 'redux'
import thunk                            from 'redux-thunk'
import reducer                          from '../reducer'

const middleware = [ thunk ]

const getStore = (preloadedState) => {
  const store = createStore(
    reducer(),
    preloadedState,
    applyMiddleware(...middleware)
  )
  return store
}

export default getStore