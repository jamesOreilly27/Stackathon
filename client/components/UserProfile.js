import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchUserThunk, updateBetThunk } from '../store'
import { AccountInfo, UsersActiveBets, UsersActivePools, CreatePoolForm } from '../components'

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

  componentDidMount() {
    this.props.getUser()
  }

  handleClick() {
    this.setState({ editButtonClicked: true })
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
        <UsersActiveBets />
        <UsersActivePools user={user} />
      </Wrapper>
    )
  }
}

const mapState = ({ user }) => ({ user })
const mapDispatch = dispatch => {
  return {
    getUser() {
      dispatch(fetchUserThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(UserProfile)
