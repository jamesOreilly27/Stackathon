import React, { Component } from 'react'
import { PlayerOnLeaderboard } from '../components'

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
            <div style={{
                margin: '3vh 0 0 10vw',
                backgroundColor: '#0A0A0A',
                borderRadius: '.3em',
                padding: '1.5em 2em',
                boxShadow: '.1em .1em .3em #9C9'
            }}>
                <div style={{fontSize: '3em'}}>
                    Leaderboard
                </div>
                <div>
                    {this.sortLeaderboard(this.props.users).map(player => {
                        return <PlayerOnLeaderboard key={player.id} player={player} isCurrentUser={this.isCurrentUser} />
                    })}
                </div>
            </div>
        )
    }
}

export default Leaderboard
