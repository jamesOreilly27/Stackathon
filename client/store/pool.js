import axios from 'axios'

const GET_SINGLE_POOL = 'GET_SINGLE_POOL'

const getSinglePool = pool => {
    return {
        type: GET_SINGLE_POOL,
        payload: pool
    }
}

const getOneReivewThunk = pool => dispatch => {
    axios.get(`/api/pools/${pool.id}`)
    .then(res => res.data)
    .then(pool => {
        dispatch(getSinglePool(pool))
    })
    .catch(next)
}