import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchUserThunk } from '../store'
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

  componentDidMount() {
    if(!this.props.user.id) {
      this.props.getUser()
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
  getUser() {
    dispatch(fetchUserThunk())
  }
})

export default connect(mapState, mapDispatch)(UserDashboard)
