import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchOnePoolThunk, fetchOddsBySport } from '../store'

class PoolDetail extends Component {
  constructor(props) {
    super(props)
  }

  isParticipating() {
    return this.props.singlePool.users.filter(player => {
      return player.id === this.props.user.id
    })
    .length ? true : false
  }

  componentDidMount() {
    this.props.getOdds(this.props.match.params.sport)
    this.props.getPoolDetail(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        {console.log('STATE', this.state)}
      </div>
    )
  }
}

const mapState = state => state
const mapDispatch = dispatch => ({
  getOdds(sport) {
    dispatch(fetchOddsBySport(sport))
  },
  getPoolDetail(id) {
    dispatch(fetchOnePoolThunk(id))
  }
})

export default connect(mapState, mapDispatch)(PoolDetail)
