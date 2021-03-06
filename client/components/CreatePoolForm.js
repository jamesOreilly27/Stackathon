import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createPoolThunk } from '../store'
import { PoolCreateSelects } from '../components'

const Wrapper = styled.div`
  background-color: #0A0A0A;
  box-shadow: .1em .1em .3em #9C9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin-left: 2vw;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1vw;
`

const Label = styled.label`
  width: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  width: 10vw;
  border-radius: .3em;
  font-size: 1em;
`

const SubmitButton = styled.button`
  width: 10vw;
  height: 3vw;
  border-radius: .5vw;
  margin-top: 1vw;
  font-size: .875em;
`

class CreatePoolForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sport: 'NFL',
      title: '',
      entryFee: 0,
      deadline: '',
      users: [this.props.user]
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    let newState = {}
    newState[name] = value
    this.setState(newState)
  }

  render() {
    return (
      <Wrapper>
        <div>
          Create A Pool
        </div>
        <Form onSubmit={(event) => {
          event.preventDefault()
          this.props.makePool(this.state)
          this.setState({
            sport: 'NFL',
            title: '',
            entryFee: 0,
            deadline: ''
          })
        }}>
          <Label>
            Title
            <Input type="text" name="title" onChange={this.handleChange}/>
          </Label>
          <Label>
            Deadline
            <Input type="text" name="deadline" onChange={this.handleChange}/>
          </Label>
          <PoolCreateSelects handleChange={this.handleChange} />
          <SubmitButton type="submit">
            Create Pool
          </SubmitButton>
        </Form>
      </Wrapper>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
    makePool(pool) {
      dispatch(createPoolThunk(pool))
    }
})

export default connect(mapState, mapDispatch)(CreatePoolForm)
