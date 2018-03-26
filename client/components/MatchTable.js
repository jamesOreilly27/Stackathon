import React, { Component } from 'react'
import { Match } from '../components'


const MatchTable = props => (
  <div className="match-table">
    <div style={{
      textAlign: 'center',
      fontSize: '1.5em'
    }}>
      Place Your Bets
        </div>
    <div>
      {props.odds && props.odds.map(match => (
        <Match key={match.id} newMatch={match} poolId={props.poolId} />
      ))}
    </div>
  </div>
)

export default MatchTable
