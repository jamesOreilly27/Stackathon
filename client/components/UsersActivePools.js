import React from 'react'
import { Pool } from '../components'

const UsersActivePools = props => (
    <div>
        <div className="active-pools-container">
            <div className="active-bets-title">
                Your Active Pools 
            </div>
            <div className="active-pools2x2">
                {props.user.pools && props.user.pools.map(pool => {
                    return <Pool key={pool.id} pool={pool} />
                })}
            </div>
        </div>
    </div>
)

export default UsersActivePools


