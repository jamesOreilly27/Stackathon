import React from 'react'
import { Bet } from '../components'


const UsersActiveBets = props => (
    <div className="active-bets-container">
        <div className="active-bets-title">
            Your Active Bets 
        </div>
        <div>
            {props.user.bets && props.user.bets.map(bet => {
                return <Bet key={bet.id} bet={bet}/>
            })}
        </div>
    </div>
)

export default UsersActiveBets
