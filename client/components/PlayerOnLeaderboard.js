import React from 'react'

const PlayerOnLeaderboard = props => {
    let bgColor;
    if(props.isCurrentUser(props.player)) bgColor = 'rgba(33, 198, 0, 0.74)'
    else bgColor = '#8C8F96'
    return (
        <div style={{
            margin: '2vh 0',
            padding: '.8em',
            backgroundColor: bgColor,
            textAlign: 'center',
            display: 'flex'
        }}>
            <div style={{marginRight: '1vw'}}>
                {`${props.player.userName}: `}
            </div>
            <div>
                {`${props.player.pool_players.poolPoints} Points`}
            </div>
        </div>
    )

}

export default PlayerOnLeaderboard
