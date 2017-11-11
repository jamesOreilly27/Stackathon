import axios from 'axios'

const GOT_BETS = 'GOT_BETS'
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

/****** Thunks *****/

export const fetchBetsThunk = () => dispatch => {
    axios.get('/api/bets')
    .then(res => dispatch(gotBets(res.data)))
}

export const createBetThunk = bet => dispatch => {
    axios.post('/api/bets', bet)
    .then(res => dispatch(createBet(res.data)))
}

const initialState = []

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case GOT_BETS:
            return action.payload
        case CREATE_BET:
            return prevState.concat([action.payload])
        default:
            return prevState
    }
}

export default reducer
