import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import pools from './pools'
import singlePool from './singlePool'
import odds from './odds'

const reducer = combineReducers({ pools, singlePool, odds })

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))

const store = createStore(reducer, middleware)

export default store
export * from './pools'
export * from './singlePool'
export * from './odds'
