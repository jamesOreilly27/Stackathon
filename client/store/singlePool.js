import axios from 'axios'

const GOT_SINGLE_POOL = 'GOT_SINGLE_POOL'
const ADDED_USER = 'ADDED_USER'

const gotSinglePool = pool => ({
  type: GOT_SINGLE_POOL,
  payload: pool
})

const addedUser = poolPlayer => ({
  type: addedUser,
  payload: poolPlayer
})



export const fetchOnePoolThunk = id => dispatch => {
  return axios.get(`/api/pools/${id}`)
  .then(res => res.data)
  .then(pool => dispatch(gotSinglePool(pool)))
  .catch(err => dispatch(gotSinglePool(err.message)))
}

export const addUserThunk = (user, pool) => dispatch => {
  axios.put(`/api/pools/${pool.id}`, user)
  .then(res => dispatch(addedUser(user)))
  .catch(err => dispatch(addedUser(err)))
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
