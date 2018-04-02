import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import pools from './pools'
import singlePool from './singlePool'
import odds from './odds'
import bets from './bets'
import user from './user'
import result from './result'
import bet from './bet'

const reducer = combineReducers({ pools, singlePool, odds, bets, user, result, bet })

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)

export default store
export * from './pools'
export * from './singlePool'
export * from './odds'
export * from './user'
export * from './bets'
export * from './bet'
export * from './result'
