import axios from 'axios'

const UPDATED_BETS = 'UPDATED_BETS'

const updatedBet = bet => {
    return {
        type: UPDATED_BET,
        payload: bet
    }
}

export const updateBetThunk = bet => dispatch => {
    axios.put('/api/bet/:id', bet)
    .then(res => dispatch(updatedBet(res.data)))
    .catch(next)
}

const initialState = {}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case UPDATED_BETS:
            return action.payload
        default:
            return prevState
    }
}