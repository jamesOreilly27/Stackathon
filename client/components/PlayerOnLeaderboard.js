import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: .5em;
  border-bottom: .15vw solid white;
  display: flex;
  justify-content: space-between;
`

const PlayerOnLeaderboard = ({ player }) => (
  <Wrapper>
    <div>
      {`${player.userName}: `}
    </div>
    <div>
      {`${player.pool_players.poolPoints} Points`}
    </div>
  </Wrapper>
)

export default PlayerOnLeaderboard
