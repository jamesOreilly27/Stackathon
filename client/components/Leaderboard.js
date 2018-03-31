import React, { Component } from 'react'
import styled from 'styled-components'
import { PlayerOnLeaderboard } from '../components'

const Wrapper = styled.div`
  background-color: '#0A0A0A';
  border-radius: .3em;
  padding: 1vw;
  box-shadow: .1em .1em .3em #9C9;
  display: flex;
`

const Title = styled.div`
  font-size: .875em;
`

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class Leaderboard extends Component {
  constructor(props) {
    super(props)

    this.isCurrentUser = this.isCurrentUser.bind(this)
  }

  sortLeaderboard(players) {
    return players.sort(function (a, b) {
      const playerOneScore = a.pool_players.poolPoints
      const playerTwoScore = b.pool_players.poolPoints

      return playerTwoScore - playerOneScore
    })
  }

  isCurrentUser(player) {
    return this.props.userId === player.id
  }

  render() {
    return (
      <Wrapper>
        <Title> Leaderboard </Title>
        <PlayerContainer>
          {this.sortLeaderboard(this.props.users).map(player => {
            return <PlayerOnLeaderboard key={player.id} player={player} isCurrentUser={this.isCurrentUser} />
          })}
        </PlayerContainer>
      </Wrapper>
    )
  }
}

export default Leaderboard
