import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { checkBetThunk, gotResultThunk } from '../store'
import { isMatchFinal, settleBet, didHomeTeamWin, setWinner } from '../../helpers'
import { AccountInfo, UsersBets, UsersActivePools, CreatePoolForm } from '../components'

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
    if(this.props.user !== nextProps.user) {
      nextProps.user.bets.forEach(bet => {
        if(!bet.result && isMatchFinal(bet)) {
          return this.props.getResult(bet.matchId)
          .then(response => {
            const result = response.payload[0]
            const newBet = {...bet, final: true}
            console.log('TEST', didHomeTeamWin(result))
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
        <UsersActivePools user={user} />
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
