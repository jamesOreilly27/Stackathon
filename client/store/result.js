import axios from 'axios'

const GOT_RESULT = 'GOT_RESULT'

const gotResult = result => ({
  type: GOT_RESULT,
  payload: result
})

export const gotResultThunk = id => dispatch => {
  return axios.get(`/api/results/match/${id}`)
  .then(res => dispatch(gotResult(res.data)))
  .catch(err => dispatch(gotResult(err.message)))
}

const reducer = (result = {}, action) => {
  switch(action.type) {
    case GOT_RESULT:
      return action.payload
    default:
      return result
  }
}

export default reducer
