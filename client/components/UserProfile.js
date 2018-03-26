import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchUserThunk, updateUserThunk, updateBetThunk } from '../store'
import { UsersActiveBets, UsersActivePools, UserProfileUpdateForm, CreatePoolForm } from '../components'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { editButtonClicked: false }
    this.handleClick = this.handleClick.bind(this)
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
      <div className="user-profile-container">
        <div className="title-user-profile">
          {`Welcome Back ${this.props.user.userName}!`}
        </div>
        <div style={{ display: 'flex' }}>
          <div
            className="profile-info-container"
            style={{ boxShadow: '.1em .1em .3em #9C9' }}
          >
            <div style={{ textAlign: 'center', fontSize: '1.6em' }}>
              Account Info
                        </div>
            <div style={{ display: 'flex' }}>
              <div className="profile-info-details">
                <div>
                  {`First Name: ${user.firstName}`}
                </div>
                <div>
                  {`Last Name: ${user.lastName}`}
                </div>
                <div>
                  {`Username: ${user.userName}`}
                </div>
                <div>
                  {`Email: ${user.email}`}
                </div>
                <div>
                  {`Available Points: ${user.points}`}
                </div>
                <button
                  className="edit-button"
                  onClick={this.handleClick}
                >
                  Edit
                                </button>
              </div>
              <div className="test">
                {this.state.editButtonClicked && <UserProfileUpdateForm handleSubmit={this.props.handleEditSubmit} />}
              </div>
            </div>
          </div>
          <CreatePoolForm />
        </div>
        <div className="users-active-stuff">
          <UsersActiveBets />
          <UsersActivePools user={user} />
        </div>
      </div>
    )
  }
}

const mapState = ({ user }) => ({ user })
const mapDispatch = dispatch => {
  return {
    getUser() {
      dispatch(fetchUserThunk())
    },
    handleEditSubmit(update) {
      dispatch(updateUserThunk(update))
    }
  }
}

export default connect(mapState, mapDispatch)(UserProfile)
