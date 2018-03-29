import axios from 'axios'

const GOT_BETS = 'GOT_BETS'
const CREATE_BET = 'CREATE_BET'

/***** Action Creators *****/

const gotBets = bets => ({
  type: GOT_BETS,
  payload: bets
})

const createBet = bet => ({
  type: CREATE_BET,
  payload: bet
})

/****** Thunks *****/

export const fetchBetsThunk = () => dispatch => {
  axios.get('/api/bets')
  .then(res => dispatch(gotBets(res.data)))
  .catch(err => dispatch(gotBets(err.message)))
}


export const createBetThunk = bet => dispatch => {
  axios.post('/api/bets', bet)
  .then(res => dispatch(createBet(res.data)))
  .catch(err => dispatch(createBet(err.message)))
}

const reducer = (bets = [], action) => {
  switch (action.type) {
    case GOT_BETS:
      return action.payload
    case CREATE_BET:
      return bets.concat([action.payload])
    default:
      return bets
  }
}

export default reducer
