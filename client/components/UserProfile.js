import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserThunk } from '../store'
import { UsersActiveBets, UsersActivePools } from '../components'

class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        const user = this.props.user
        return (
            <div className="user-profile-container">
                <div className="title-user-profile">
                    {`Welcome Back ${this.props.user.userName}!`}
                </div>
                <div className="users-active-stuff">
                    <UsersActiveBets user={user} />
                    <UsersActivePools user={user }/>
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
        }
    }
}

export default connect(mapState, mapDispatch)(UserProfile)
