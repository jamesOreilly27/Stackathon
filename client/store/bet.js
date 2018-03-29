import axios from 'axios'

const SETTLED_BET = 'SETTLED_BET'

const settledBet = bet => ({
    type: SETTLED_BET,
    payload: bet
})

export const settleBetThunk = bet => dispatch => {
  axios.put('/api/bet/:id', bet)
    .then(res => dispatch(settledBet(res.data)))
    .catch(next)
}

const reducer = (bet = {}, action) => {
  switch (action.type) {
    case SETTLED_BETS:
      return { ...bet, final: action.payload.final, playerResult: action.payload.result }
    default:
      return bet
  }
}
