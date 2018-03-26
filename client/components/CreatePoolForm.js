import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPoolThunk } from '../store'

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
    const newState = {}
    console.log('SELECT CHANGE', name, value)
    newState[name] = value
    this.setState(newState)
  }

  render() {
    return (
      <div className="user-profile-pool-create-container"
        style={{
          width: '25vw',
          backgroundColor: '#0A0A0A',
          boxShadow: '.1em .1em .3em #9C9',
          margin: '0 3vw',
          textAlign: 'center',
          padding: '.8em'
        }}
      >
        <div style={{ fontSize: '1.5em' }}>
          Create A Pool
                </div>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.makePool(this.state)
          this.setState({
            sport: 'NFL',
            title: '',
            entryFee: 0,
            deadline: ''
          })
        }}>
          <label>
            Title
                        <input
              type="text"
              name="title"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Deadline
                        <input
              type="text"
              name="deadline"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Sport
                        <select name="sport" onChange={this.handleChange}>
              <option value={1}>NFL</option>
              <option value={2}>NBA</option>
            </select>
          </label>
          <label>
            Entry Fee
                        <select name="entryFee" onChange={this.handleChange}>
              {[50, 100, 150, 200].map(fee => {
                return <option key={fee} value={fee}>{`${fee} points`}</option>
              })}
            </select>
          </label>
          <button type="submit" className="create-pool-submit">
            Create Pool
                    </button>
        </form>
      </div>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => {
  return {
    makePool(pool) {
      dispatch(createPoolThunk(pool))
    }
  }
}


export default connect(mapState, mapDispatch)(CreatePoolForm)
