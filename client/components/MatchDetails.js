import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 14vw;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ScoresContainer = Container.extend`
  height: 4.5vw;
`

const MatchDetails = ({ bet, hasScore }) => (
  <Wrapper>
    <Container>
      <div>
        {bet.awayTeam}
      </div>
      <div>
        @
      </div>
      <div>
        {bet.homeTeam}
      </div>
    </Container>
    {hasScore &&
      <ScoresContainer>
        <div> {bet.result.AwayScore} </div>
        <div> {bet.result.HomeScore} </div>
      </ScoresContainer>
    }
  </Wrapper>
)

export default MatchDetails
