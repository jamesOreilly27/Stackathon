import axios from 'axios'

const UPDATED_BET = 'UPDATED_BET'

const updatedBet = bet => ({
    type: UPDATED_BET,
    payload: bet
})

export const updateBetThunk = bet => dispatch => {
  axios.put('/api/bet/:id', bet)
    .then(res => dispatch(updatedBet(res.data)))
    .catch(next)
}

const reducer = (bet = {}, action) => {
  switch (action.type) {
    case UPDATED_BETS:
      return action.payload
    default:
      return bet
  }
}
