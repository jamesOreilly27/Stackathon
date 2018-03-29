import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { settleBetThunk } from '../store'
import { isMatchFinal } from '../../helpers'
import { AccountInfo, UsersBets, UsersActivePools, CreatePoolForm } from '../components'

const Wrapper = styled.div`
  margin: 1vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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

class UserProfile extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.setState({ editButtonClicked: true })
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user !== nextProps.user) {
      nextProps.user.bets.forEach(bet => {
        const newBet = {...bet, final: isMatchFinal(bet)}
        this.props.settleBet(newBet)
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
        <UpperContainer>
          <AccountInfo />
          <CreatePoolForm />
        </UpperContainer>
        <UsersBets bets={user.bets}/>
        <UsersActivePools user={user} />
      </Wrapper>
    )
  }
}

const mapState = ({ user }) => ({ user })

const mapDispatch = dispatch => ({
  settleBet(bet) {
    dispatch(settleBetThunk(bet))
  }
})

export default connect(mapState, mapDispatch)(UserProfile)
