import axios from 'axios'

const GOT_ODDS = 'GOT_ODDS'

const gotOdds = odds => {
  return {
    type: GOT_ODDS,
    payload: odds
  }
}

export const fetchOddsBySport = sport => dispatch => {
  axios.get(`/api/odds/${sport}`)
  .then(res => dispatch(gotOdds(res.data)))
  .catch(err => dispatch(gotOdds(err.message)))
}

export const fetchNFLOddsThunk = () => dispatch => {
  axios.get('/api/odds/nfl')
    .then(res => dispatch(gotOdds(res.data)))
    .catch(err => dispatch(gotOdds(err)))
}

export const fetchNBAOddsThunk = () => dispatch => {
  axios.get('/api/odds/nba')
    .then(res => dispatch(gotOdds(res.data)))
    .catch(err => dispatch(gotOdds(err)))
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
