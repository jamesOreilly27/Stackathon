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

  componentWillReceiveProps(nextProps) {
    if(this.props.match.path !== nextProps.match.path) {
      this.props.getPools(nextProps.match.path)
    }
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
    getPools(sport) {
      dispatch(fetchPoolsBySport(sport))
    }
})

export default connect(mapState, mapDispatch)(SportHome)
