import axios from 'axios'

const GET_POOLS = 'GET_POOLS'
const GET_SINGLE_POOL = 'GET_SINGLE_POOL'

const gotPools = pools => {
    return {
        type: GET_POOLS,
        payload: pools
    }
}

const gotSinglePool = pool => {
    return {
        type: GET_SINGLE_POOL,
        payload: pool
    }
}

const fetchPoolThunk = pools => dispatch => {
    axios.get('/api/pools')
    .then(res => res.data)
    .then(pools => {
        dispatch(getPools(pools))
    })
}

const fetchOnePoolThunk = pool => dispatch => {
    axios.get(`/api/pools/${pool.id}`)
    .then(res => res.data)
    .then(pool => {
        dispatch(getSinglePool(pool))
    })
    .catch(next)
}

initialState = {
    pools = [],
    singlePool: {}
}

const reducer =  (prevState = initialState, action) => {
    switch (action.type) {
        case GOT_POOLS:
            return { ...state, pools: action.payload }
        case GOT_SINGLE_POOL:
            return { ...state, singlePool: action.payload }
    }
}