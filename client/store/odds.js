import axios from 'axios'

const GOT_ODDS = 'GOT_ODDS'

const gotOdds = odds => {
    return {
        type: GOT_ODDS,
        payload: odds
    }
}

export const fetchNFLOddsThunk = () => dispatch => {
    axios.get('/api/odds/nfl')
    .then(res => res.data)
    .then(odds => {
        dispatch(gotOdds(odds))
    })
    .catch(console.error)
}

const initialState = []

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case GOT_ODDS:
            return action.payload
        default:
            return prevState
    }
}

export default reducer
