import axios from 'axios'

const GOT_SINGLE_POOL = 'GOT_SINGLE_POOL'

const gotSinglePool = pool => {
    return {
        type: GOT_SINGLE_POOL,
        payload: pool
    }
}

export const fetchOnePoolThunk = pool => dispatch => {
    axios.get(`/api/pools/${pool.id}`)
    .then(res => res.data)
    .then(pool => {
        dispatch(gotSinglePool(pool))
    })
}

const initialState = {}

const reducer =  (prevState = initialState, action) => {
    switch (action.type) {
        case GOT_SINGLE_POOL:
            return action.payload
        default:
            return prevState
    }
}

export default reducer
