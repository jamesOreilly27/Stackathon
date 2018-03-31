import axios from 'axios'

const GOT_SINGLE_POOL = 'GOT_SINGLE_POOL'

const gotSinglePool = pool => ({
  type: GOT_SINGLE_POOL,
  payload: pool
})

export const fetchOnePoolThunk = id => dispatch => {
  return axios.get(`/api/pools/${id}`)
  .then(res => res.data)
  .then(pool => dispatch(gotSinglePool(pool)))
  .catch(err => dispatch(gotSinglePool(err.message)))
}

const reducer = (pool = {}, action) => {
  switch (action.type) {
    case GOT_SINGLE_POOL:
      return action.payload
    default:
      return pool
  }
}

export default reducer
