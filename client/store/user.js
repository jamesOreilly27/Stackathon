import axios from 'axios'

const GOT_USER = 'GOT_USER'


const gotUser = user => {
    return {
        type: GOT_USER,
        payload: user
    }
}

//only gets one user right now to save time
export const fetchUserThunk = () => dispatch => {
    axios.get('/api/users/1')
    .then(res => dispatch(gotUser(res.data)))
    .catch(err => dispatch(gotUser(err)))
}

const initialState = {}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case GOT_USER:
            return action.payload
        default:
            return prevState
    }
}

export default reducer
