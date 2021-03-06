import axios from 'axios'

const GOT_BETS = 'GOT_BETS'
const CREATED_BET = 'CREATED_BET'
const SET_USER_BETS = 'SET_USER_BETS'

/***** Action Creators *****/

const gotBets = bets => ({
  type: GOT_BETS,
  payload: bets
})

const createdBet = bet => ({
  type: CREATED_BET,
  payload: bet
})

export const setUserBets = bets => ({
  type: SET_USER_BETS,
  payload: bets
})

/****** Thunks *****/

export const fetchBetsThunk = () => dispatch => {
  axios.get('/api/bets')
  .then(res => dispatch(gotBets(res.data)))
  .catch(err => dispatch(gotBets(err.message)))
}


export const createBetThunk = bet => dispatch => {
  axios.post('/api/bets', bet)
  .then(res => dispatch(createdBet(res.data)))
  .catch(err => dispatch(createdBet(err.message)))
}

const reducer = (bets = [], action) => {
  switch (action.type) {
    case GOT_BETS:
      return action.payload
    case CREATED_BET:
      return bets.concat([action.payload])
    case SET_USER_BETS:
      return action.payload
    default:
      return bets
  }
}

export default reducer
