import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchOnePoolThunk, fetchOddsBySport, setUserBets, fetchUserThunk, addUserThunk } from '../store'
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

    this.state = { userIsParticipant: false }
  }

  isParticipating() {
    return this.props.singlePool.users.filter(player => {
      return player.id === this.props.user.id
    })
    .length ? true : false
  }

  componentDidMount() {
    this.props.getPoolDetail(this.props.match.params.id)
      .then(response => response.payload)
      .then(pool => {
        this.setState({ userIsParticipant: this.isParticipating() })
        return this.props.user.bets.filter(bet => bet.poolId === pool.id)
      })
      .then(bets => this.props.userBetsToProps(bets))
      .catch(err => this.props.userBetsToProps(err.message))
    
      this.props.getOdds(this.props.match.params.sport)
  }

  render() {
    return (
      <Wrapper>
        <Leaderboard users={this.props.singlePool.users}/>
        {this.state.userIsParticipant
          ? <div style={{width: '85vw'}}>
              <UsersBets bets={this.props.bets} />
              <MatchTable odds={this.props.odds} poolId={parseInt(this.props.match.params.id)} />
            </div>
          : <div>
              <button onClick={() => {
                this.setState({ userIsParticipant: true })
                return this.props.handleClick(this.props.user, this.props.singlePool)
              }}> Join Now </button>
            </div>
        }
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
    return dispatch(fetchOnePoolThunk(id))
  },
  userBetsToProps(bets) {
    dispatch(setUserBets(bets))
  },
  handleClick(user, pool) {
    dispatch(addUserThunk(user, pool))
  }
})

export default connect(mapState, mapDispatch)(PoolHome)
