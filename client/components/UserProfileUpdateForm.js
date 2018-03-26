import React, { Component } from 'react'


class UserProfileUpdateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 8,
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const inputField = event.target.name
    const value = event.target.value
    const newState = {}
    newState[inputField] = value
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            this.props.handleSubmit(this.state)
          }}
          style={{ textAlign: 'center' }}
        >
          <label>
            First Name
                        <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Last Name
                        <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Username
                        <input
              type="text"
              name="userName"
              style={{ borderRadius: '.3em' }}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email
                        <input
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <button type="submit" className="submit-update-button">
            submit
                    </button>
        </form>
      </div>
    )
  }
}


export default UserProfileUpdateForm
