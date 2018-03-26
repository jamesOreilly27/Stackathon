import React, { Component } from 'react'
import { Bet } from '../components'
import { connect } from 'react-redux'

class ActivePoolBets extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className="active-bets-container"
        style={{
          boxShadow: '.1em .1em .3em #9C9',
          margin: '3vh 0 0 5vw'
        }}
      >
        <div className="active-bets-title">
          Your Active Bets
                </div>
        <div>
          {this.props.user.bets && this.props.user.bets.map(bet => {
            return <Bet key={bet.id} bet={bet} />
          })}
        </div>
      </div>
    )
  }
}

const mapState = ({ user, singlePool }) => ({ user, singlePool })

export default connect(mapState)(ActivePoolBets)