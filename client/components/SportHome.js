import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Game, PoolLink } from '../components'
import { fetchPoolsBySport, fetchOddsBySport } from '../store'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh 10vw;
  width: 90vw;
  font-size: .875em;
`

const GamesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  overflow-x: auto;
  background-color: #0A0A0A;
`

const PoolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0A0A0A;
  margin: 3vw 0;
  width: 80vw;
`

class SportHome extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPools(this.props.match.params.sport)
    this.props.getOdds(this.props.match.params.sport)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.sport !== nextProps.match.params.sport) {
      this.props.getPools(nextProps.match.params.sport)
      this.props.getOdds(nextProps.match.params.sport)
    }
  }

  render() {
    return (
      <Wrapper>
        <GamesContainer>
          {this.props.odds && this.props.odds.map(game => {
            return <Game game={game} />
          })}
        </GamesContainer>
        <PoolsContainer>
          {this.props.pools && this.props.pools.map(pool => {
            return <PoolLink key={pool.id} pool={pool} />
          })}
        </PoolsContainer>
      </Wrapper>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
    getPools(sport) {
      dispatch(fetchPoolsBySport(sport))
    },
    getOdds(sport) {
      dispatch(fetchOddsBySport(sport))
    }
})

export default connect(mapState, mapDispatch)(SportHome)
