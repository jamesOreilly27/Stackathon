import React from 'react'
import { Bet } from '../components'


const ActiveBets = props => (
    <div>
        {console.log('PROPS', props.user)}
        <h2>
            Your Active Bets 
        </h2>
        <div>
            {props.user.bets && props.user.bets.map(bet => {
                return <Bet bet={bet} />
            })}
        </div>
    </div>
)

export default ActiveBets
