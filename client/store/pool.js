import axios from 'axios'

const GOT_POOLS = 'GOT_POOLS'
const GOT_SINGLE_POOL = 'GOT_SINGLE_POOL'

const gotPools = pools => {
    return {
        type: GOT_POOLS,
        payload: pools
    }
}

const gotSinglePool = pool => {
    return {
        type: GET_SINGLE_POOL,
        payload: pool
    }
}

export const fetchPoolThunk = pools => dispatch => {
    axios.get('/api/pools')
    .then(res => res.data)
    .then(pools => {
        dispatch(gotPools(pools))
    })
}

export const fetchOnePoolThunk = pool => dispatch => {
    axios.get(`/api/pools/${pool.id}`)
    .then(res => res.data)
    .then(pool => {
        dispatch(gotSinglePool(pool))
    })
    .catch(next)
}

const initialState = {
    pools: [],
    singlePool: {}
}

const reducer =  (prevState = initialState, action) => {
    switch (action.type) {
        case GOT_POOLS:
            return Object.assign({}, prevState, { pools: action.payload })
        case GOT_SINGLE_POOL:
            return Object.assign({}, prevState, { singlePool: action.payload })
        default:
            return prevState
    }
}

export default reducer