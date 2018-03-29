import axios from 'axios'

const SETTLED_BET = 'SETTLED_BET'

const settledBet = bet => ({
    type: SETTLED_BET,
    payload: bet
})

export const settleBetThunk = bet => dispatch => {
  axios.put(`/api/bets/${bet.id}`, bet)
    .then(res => dispatch(settledBet(res.data)))
    .catch(err => dispatch(settledBet(err.message)))
}

const reducer = (bet = {}, action) => {
  switch (action.type) {
    case SETTLED_BET:
      return action.payload
    default:
      return bet
  }
}
