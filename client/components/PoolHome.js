import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchOnePoolThunk, fetchOddsBySport } from '../store'
import { MatchTable } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class PoolHome extends Component {
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
      <Wrapper>
        <MatchTable odds={this.props.odds} poolId={parseInt(this.props.match.params.id)} />
      </Wrapper>
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

export default connect(mapState, mapDispatch)(PoolHome)
