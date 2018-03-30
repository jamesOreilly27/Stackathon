import React from 'react'
import styled from 'styled-components'
import truncateTeamName, { processTime } from '../../helpers'

const Wrapper = styled.div`
  font-size: .75em;
  padding: 0 1em;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  border-right: 1px solid #FFF;
  border-bottom: 1px solid #FFF;
`

const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: .5em;
`

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Game = props => (
  <Wrapper>
    <TeamsContainer>
      <div>
        {truncateTeamName(props.game.HomeTeam)}
      </div>
      <div>
        {truncateTeamName(props.game.AwayTeam)}
      </div>
    </TeamsContainer>
    <TimeContainer>
      <div>
        {processTime(props.game.MatchTime)}
      </div>
      <div>
        {'PM'}
      </div>
    </TimeContainer>
  </Wrapper>
)

export default Game
