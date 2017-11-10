import axios from 'axios'

const GOT_BETS = 'GOT_BETS-'
const CREATE_BET = 'CREATE_BET'

/***** Action Creators *****/

const gotBets = bets => {
    return {
        type: GOT_BETS,
        payload: bets
    }
}

const createBet = bet => {
    return {
        type: CREATE_BET,
        payload: bet
    }
}

/***** Thunks *****/
export const fetchBetsThunk = () => dispatch => {
    axios.get('/api/bets')
    .then(res => res.data)
    .then(bets => {
        dispatch(gotBets(bets))
    })
}

export const createBetThunk = bet => dispatch => {
    axios.post('/api/bet', bet)
    .then(res => res.data)
    .then(bet => {
        dispatch(createBet(bet))
    })
}