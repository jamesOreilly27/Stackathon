import axios from 'axios'

const GOT_POOLS = 'GOT_POOLS'
const CREATED_POOL = 'CREATED_POOL'
const ADDED_USER = 'ADDED_USER'

const gotPools = pools => ({
  type: GOT_POOLS,
  payload: pools
})

const createdPool = pool => ({
  type: CREATED_POOL,
  payload: pool
})

const addedUser = pool => ({
  type: ADDED_USER,
  payload: pool
})

export const fetchPoolsBySport = sport => dispatch => {
  console.log('SPORT', sport)
  axios.get(`/api/pools/sports/${sport}`)
  .then(res => dispatch(gotPools(res.data)))
  .catch(err => dispatch(gotPools(err.message)))
}

export const createPoolThunk = pool => dispatch => {
  axios.post(`/api/pools/nfl`, pool)
  .then(res => dispatch(createdPool(res.data)))
  .catch(err => dispatch(createdPool(err)))
}

const reducer = (pools = [], action) => {
  switch (action.type) {
    case GOT_POOLS:
      return action.payload
    case CREATED_POOL:
      return pools.concat([action.payload])
    case ADDED_USER:
      return pools
    default:
      return pools
  }
}

export default reducer
