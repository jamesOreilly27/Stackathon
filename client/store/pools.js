import axios from 'axios'

const GOT_POOLS = 'GOT_POOLS'

const gotPools = pools => {
    return {
        type: GOT_POOLS,
        payload: pools
    }
}

export const fetchPoolsThunk = () => dispatch => {
    axios.get('/api/pools')
    .then(res => res.data)
    .then(pools => {
        dispatch(gotPools(pools))
    })
}

export const fetchNFLPoolsThunk = pools => dispatch => {
    axios.get('/api/pools/nfl')
    .then(res => res.data)
    .then(pools => {
        dispatch(gotPools(pools))
    })
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
