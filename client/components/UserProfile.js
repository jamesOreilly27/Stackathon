import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserThunk } from '../store'
import { ActiveBets } from '../components'

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
            <div>
                {user && console.log(user)}
                <div className="title-user-profile">
                    {`Welcome ${this.props.user.userName}!`}
                </div>
                <div className="users-active-stuff">
                    <ActiveBets user={user} />
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
