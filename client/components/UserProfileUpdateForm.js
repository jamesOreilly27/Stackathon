import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  margin: 0;
`

const SubmitButton = styled.button`
  width: 10em;
  height: 3em;
  border-radius: .5em;
  margin-top: .5em;
`

const Input = styled.input`
  width: 90%;
  border-radius: .3em;
`

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
        <Wrapper
          onSubmit={(event) => {
            event.preventDefault()
            console.log(this)
            this.props.handleSubmit(this.state)
          }}
        >
          <label>
            First Name
            <Input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Last Name
            <Input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Username
            <Input
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
            <Input
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <SubmitButton type="submit">
            submit
          </SubmitButton>
        </Wrapper>
    )
  }
}


export default UserProfileUpdateForm
