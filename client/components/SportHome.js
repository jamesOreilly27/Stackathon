import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Game } from '../components'
import { fetchPoolsBySport, fetchOddsBySport } from '../store'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh 10vw;
  width: 100vw;
  border: 1px solid white;
`

const GamesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  overflow-x: auto;
  background-color: #0A0A0A;
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
