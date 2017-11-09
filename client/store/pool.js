import axios from 'axios'

const GET_SINGLE_POOL = 'GET_SINGLE_POOL'

const getSinglePool = pool => {
    return {
        type: GET_SINGLE_POOL,
        payload: pool
    }
}