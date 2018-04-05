import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { checkBetThunk, gotResultThunk } from '../store'
import { isInProgress, settleBet, didHomeTeamWin, setWinner } from '../../helpers'
import { AccountInfo, UsersBets, UsersPools, CreatePoolForm } from '../components'

const Wrapper = styled.div`
  margin: 1vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

const Title = styled.div`
  margin-top: 3vw;
  color: #FAFAFA;
  font-size: 1em;
`

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

class UserDashboard extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.setState({ editButtonClicked: true })
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user.id !== nextProps.user.id) {
      nextProps.user.bets.forEach(bet => {
        if(!bet.final && isInProgress(bet)) {
          return this.props.getResult(bet.matchId)
          .then(response => {
            console.log('RESULT', response.payload[0])
            const result = response.payload[0]
            const newBet = {...bet, final: result.Final}
            this.props.checkBet(settleBet(newBet, result))
          })
        }
      }) 
    }
  }

  render() {
    const user = this.props.user
    return (
      <Wrapper>
        <Title>
          {`Welcome Back ${this.props.user.userName}!`}
        </Title>
        <UsersPools user={user} />
        <UsersBets bets={user.bets}/>
      </Wrapper>
    )
  }
}

const mapState = ({ user }) => ({ user })

const mapDispatch = dispatch => ({
  checkBet(bet) {
    dispatch(checkBetThunk(bet))
  },

  getResult(id) {
    return dispatch(gotResultThunk(id))
  }
})

export default connect(mapState, mapDispatch)(UserDashboard)
