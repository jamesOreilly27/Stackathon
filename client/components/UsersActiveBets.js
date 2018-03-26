import React from 'react'
import { Bet } from '../components'
import { connect } from 'react-redux'


const UsersActiveBets = props => (
  <div
    className="active-bets-container"
    style={{ boxShadow: '.1em .1em .3em #9C9' }}
  >
    <div className="active-bets-title">
      Your Active Bets
        </div>
    <div>
      {props.user.bets && props.user.bets.map(bet => {
        return <Bet key={bet.id} bet={bet} />
      })}
    </div>
  </div>
)

const mapState = ({ user }) => ({ user })

export default connect(mapState)(UsersActiveBets)
