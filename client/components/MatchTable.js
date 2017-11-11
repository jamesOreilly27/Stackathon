import React, {Component} from 'react'
import {Match} from '../components'


const MatchTable = props => (
    <div className="match-table">
        {props.odds && props.odds.map(match => (
            <Match newMatch={match} key={match.id} poolId={props.poolId}/>
        ))}
    </div>
)

export default MatchTable
