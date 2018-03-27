import axios from 'axios'

const GOT_POOLS = 'GOT_POOLS'
const CREATED_POOL = 'CREATED_POOL'
const ADDED_USER = 'ADDED_USER'

const gotPools = pools => {
  return {
    type: GOT_POOLS,
    payload: pools
  }
}

const createdPool = pool => {
  return {
    type: CREATED_POOL,
    payload: pool
  }
}

const addedUser = pool => {
  return {
    type: ADDED_USER,
    payload: pool
  }
}

export const fetchNFLPoolsThunk = pools => dispatch => {
  axios.get('/api/pools/nfl')
    .then(res => dispatch(gotPools(res.data)))
    .catch(err => dispatch(gotPools(err.message)))
}

export const fetchNBAPoolsThunk = pools => dispatch => {
  axios.get('/api/pools/nba')
    .then(res => dispatch(gotPools(res.data)))
    .catch(err => dispatch(gotPools(err.message)))
}

export const createPoolThunk = pool => dispatch => {
  axios.post(`/api/pools/nfl`, pool)
    .then(res => dispatch(createdPool(res.data)))
    .catch(err => dispatch(createdPool(err)))
}

export const addUserThunk = (user, pool) => dispatch => {
  axios.put(`/api/pools/${pool.id}`, user)
    .then(res => dispatch(addedUser(user)))
    .catch(err => dispatch(addedUser(err)))
}

const initialState = []

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GOT_POOLS:
      return action.payload
    case CREATED_POOL:
      return prevState.concat([action.payload])
    case ADDED_USER:
      return prevState
    default:
      return prevState
  }
}

export default reducer
