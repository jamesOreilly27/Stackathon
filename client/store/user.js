import axios from 'axios'

const GOT_USER = 'GOT_USER'
const UPDATED_USER = 'UPDATED_USER'


const gotUser = user => {
  return {
    type: GOT_USER,
    payload: user
  }
}

const updatedUser = user => {
  return {
    type: UPDATED_USER,
    payload: user
  }
}

//only gets one user right now to save time
export const fetchUserThunk = () => dispatch => {
  axios.get('/api/users/8')
    .then(res => dispatch(gotUser(res.data)))
    .catch(err => dispatch(gotUser(err)))
}

export const updateUserThunk = user => dispatch => {
  axios.put(`api/users/${user.id}`, user)
    .then(res => res.data)
    .then(changedUser => dispatch(updatedUser(changedUser[1][0])))
    .catch(err => dispatch(updatedUser(err)))
}


const initialState = {}

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GOT_USER:
      return action.payload
    case UPDATED_USER:
      return Object.assign({}, prevState, action.payload)
    default:
      return prevState
  }
}

export default reducer
