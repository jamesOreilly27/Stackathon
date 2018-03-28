import React, { Component } from 'react'
import styled from 'styled-components'
import { Match } from '../components'

const Wrapper = styled.div`
  margin: 2vw 0;
  padding: .5em;
  background-color: #0A0A0A;
  border-radius: .3em;
  box-shadow: 1em .1em .3em #9C9;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`

`

const Title = styled.div`
  font-size: 1em;
`
const MatchTable = props => (
  <Wrapper>
    <Title> Place Your Bets </Title>
    <Container>
      {props.odds && props.odds.map(match => (
        <Match key={match.id} newMatch={match} poolId={props.poolId} />
      ))}
    </Container>
  </Wrapper>
)

export default MatchTable
