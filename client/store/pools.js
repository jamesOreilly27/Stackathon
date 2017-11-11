import axios from 'axios'

const GOT_POOLS = 'GOT_POOLS'

const gotPools = pools => {
    return {
        type: GOT_POOLS,
        payload: pools
    }
}

export const fetchNFLPoolsThunk = pools => dispatch => {
    axios.get('/api/pools/nfl')
    .then(res => dispatch(gotPools(res.data)))
    .catch(err => dispatch(gotPools(err.message)))
}

export const fetchNBAPoolsThunk = pools => dispatch => {
    axios.get('/api/pools/nba')
    .then(res => dispatch(gotPools(res.data)))
    .catch(err => dispatch(gotPools(err.message)))
}

const initialState = []

const reducer =  (prevState = initialState, action) => {
    switch (action.type) {
        case GOT_POOLS:
            return action.payload
        default:
            return prevState
    }
}

export default reducer
