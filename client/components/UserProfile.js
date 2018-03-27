import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchUserThunk, updateBetThunk } from '../store'
import { AccountInfo, UsersActiveBets, UsersActivePools, CreatePoolForm } from '../components'

const Wrapper = styled.div`
  margin: 8vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  margin: .3em;
  color: #FAFAFA;
  font-size: 1.5em;
`

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProfileInfoContainer = styled.div`
  text-align: center;
  background-color: #0A0A0A;
  padding: .5em;
  border-radius: .3em;
  box-shadow: .1em .1em .3em #9C9
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
        <div className="users-active-stuff">
          <UsersActiveBets />
          <UsersActivePools user={user} />
        </div>
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
