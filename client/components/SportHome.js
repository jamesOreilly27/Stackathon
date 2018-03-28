import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchPoolsBySport } from '../store'

class SportHome extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPools(this.props.match.path)
  }

  render() {
    return (
      <div>
        {console.log('PROPS', this.props)}
        Hello World!
      </div>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => {
  return {
    getPools(sport) {
      dispatch(fetchPoolsBySport(sport))
    }
  }
}

export default connect(mapState, mapDispatch)(SportHome)
