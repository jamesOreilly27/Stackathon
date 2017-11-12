import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOnePoolThunk } from '../store'

class Pool extends Component {
    constructor(props) {
        super(props)

        // this.findLeader = this.findLeader.bind(this)
    }

    findLeader(players) {
        let leader;
        let highScore = 0;
        players.forEach(player => {
            if(player.pool_players.poolPoints > highScore) {
                highScore = player.pool_players.poolPoints
                leader = player.userName
            }
        })
        return (
            <div style={{
                textAlign: 'center',
                width: '15vw',
            }}>
                <div>
                    Leader 
                </div>
                <div style={{fontSize: '1.2em'}}>
                    {leader}
                </div>
            </div>
        )
    }

    render() {
        const pool = this.props.pool
        return (
            <Link to={`/pools/nfl/${pool.id}`} style={{textDecoration: 'none'}}>
                <div className="pool-container">
                    <div style={{color: '#000'}}>
                        <div style={{
                            boxSizing: 'border-box',
                            padding: '.25em'
                        }}>
                            Pool ID
                        </div>
                        <div>
                            {pool.id}
                        </div>
                    </div>
                    <div style={{
                        boxSizing: 'border-box',
                        margin: '0 .5vw',
                        padding: '1vh 1vw',
                        color: '#000',
                        width: '8vw',
                        textAlign: 'center',
                        height: '10vh'
                    }}>
                        {pool.title}
                    </div>
                    <div style={{
                        color: '#000',
                        margin: '0 .5vw'
                    }}>
                        {pool.users && this.findLeader(pool.users)}
                    </div>
                </div>
            </Link>
        )
    }
}

export default Pool
