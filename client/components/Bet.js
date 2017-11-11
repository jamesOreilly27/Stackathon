import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMatchThunk } from '../store'

const Bet = props => {
    const bet = props.bet
    return (
        <div>
            <div className="bet">
                <div className="match-up">
                    <div className="game-details">
                        <div>
                            {bet.awayTeam}
                        </div>
                        <div>
                            @
                        </div>
                        <div>
                            {bet.homeTeam}
                        </div>
                    </div>
                    <div className="time">
                        {bet.matchTime}
                    </div>
                </div>
                <div className="bet-user-info">
                    <div style={{fontSize: '1.8em', marginBottom: '3vh'}}>
                        Your Pick
                    </div>
                    <div style={{fontSize: '2em'}}>
                        <div>
                            {bet.playerPick}
                        </div>
                        <div>
                            {bet.odds > 0 ? `+${bet.odds}` : bet.odds}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
    

export default Bet
