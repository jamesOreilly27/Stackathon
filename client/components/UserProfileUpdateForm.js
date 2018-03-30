import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vw;
`

const Label = styled.label`
  width: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubmitButton = styled.button`
  width: 10vw;
  height: 5vw;
  border-radius: .5vw;
  font-size: .875em;
`

const Input = styled.input`
  width: 10vw;
  height: 2vw;
  border-radius: .3em;
  font-size: .875em;
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
        <Form
          onSubmit={(event) => {
            event.preventDefault()
            this.props.handleSubmit(this.state)
          }}
        >
          <Label>
            First Name
            <Input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              required
            />
          </Label>
          <br />
          <Label>
            Last Name
            <Input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              required
            />
          </Label>
          <br />
          <Label>
            Username
            <Input
              type="text"
              name="userName"
              style={{ borderRadius: '.3em' }}
              onChange={this.handleChange}
              required
            />
          </Label>
          <br />
          <Label>
            Email
            <Input
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </Label>
          <br />
          <SubmitButton type="submit">
            submit
          </SubmitButton>
        </Form>
    )
  }
}


export default UserProfileUpdateForm
