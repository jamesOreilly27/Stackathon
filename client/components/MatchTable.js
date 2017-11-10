import React, {Component} from 'react'
import {Match} from '../components'


const MatchTable = props => (
    <div>
        {props.odds && props.odds.map(match => (
            <Match newMatch={match} key={match.id} />
        ))}
    </div>
)

export default MatchTable
