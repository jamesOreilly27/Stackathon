import React from 'react'
import { YourActivePool } from '../components'

const UsersActivePools = props => (
  <div>
    <div
      className="active-pools-container"
      style={{ boxShadow: '.1em .1em .3em #9C9' }}
    >
      <div className="active-bets-title">
        Your Active Pools
            </div>
      <div className="active-pools2x2">
        {props.user.pools && props.user.pools.map(pool => {
          return <YourActivePool key={pool.id} pool={pool} />
        })}
      </div>
    </div>
  </div>
)

export default UsersActivePools


