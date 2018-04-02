import axios from 'axios'

const GOT_USER = 'GOT_USER'
const UPDATED_USER = 'UPDATED_USER'
const SETTLED_BET = 'SETTLED_BET'

const gotUser = user => ({
  type: GOT_USER,
  payload: user
})

const updatedUser = user => ({
  type: UPDATED_USER,
  payload: user
})

const settledBet = bet => ({
  type: SETTLED_BET,
  payload: bet
})

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

export const checkBetThunk = bet => dispatch => {
  axios.put(`/api/bets/${bet.id}`, bet)
  .then(res => dispatch(settledBet(res.data[1][0])))
  .catch(err => dispatch(settledBet(err.message)))
}


const reducer = (user = {}, action) => {
  switch (action.type) {
    case GOT_USER:
      return action.payload
    case UPDATED_USER:
      return Object.assign({}, user, action.payload)
    case SETTLED_BET:
      return {...user, bets: [...user.bets.filter(bet => bet.id !==action.payload.id).concat([action.payload])]}
    default:
      return user
  }
}

export default reducer
