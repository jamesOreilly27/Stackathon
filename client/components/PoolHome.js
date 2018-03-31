import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchOnePoolThunk, fetchOddsBySport, setUserBets, fetchUserThunk } from '../store'
import { MatchTable, Leaderboard, UsersBets } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6vh 10vw;
  align-items: center;
  width: 100vw;
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
    this.props.getUser()
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user !== nextProps.user) {
      return this.props.getPoolDetail(this.props.match.params.id)
      .then(response => response.payload)
      .then(pool => this.props.user.bets.filter(bet => bet.poolId === pool.id))
      .then(bets => this.props.userBetsToProps(bets))
      .catch(err => this.props.userBetsToProps(err.message))
    }
  }

  render() {
    return (
      <Wrapper>
        <Leaderboard users={this.props.singlePool.users}/>
        <UsersBets bets={this.props.bets} /> 
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
  getUser() {
    dispatch(fetchUserThunk())
  },
  getPoolDetail(id) {
    return dispatch(fetchOnePoolThunk(id))
  },
  userBetsToProps(bets) {
    dispatch(setUserBets(bets))
  }
})

export default connect(mapState, mapDispatch)(PoolHome)
