import React from 'react'
import { connect } from 'react-redux'
import { fetchMatchesById } from '../store'

const Bet = props => (
    <div>
        Hello From Bet
    </div>
)

const mapState = state => state
const mapDispatch = dispatch => {
    return {
        getMatches(id) {
            dispatch(fetchMatchesById(id))
        }
    }
}

export default connect(mapState, mapDispatch)(Bet)
