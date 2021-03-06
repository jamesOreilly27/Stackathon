import React, { Component } from 'react'
import styled from 'styled-components'
import { Match } from '../components'
import LoaderWheel from './LoaderWheel'

const Wrapper = styled.div`
  margin-top: 2vw;
  width: 100%;
  padding: .5em;
  background-color: #0A0A0A;
  border-radius: .3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0.1em 0.1em 0.3em #9C9
`

const Container = styled.div`
  width: 100%;
`

const Title = styled.div`
  font-size: 1em;
  text-align: center;
`
const MatchTable = props => (
  <Wrapper>
    <Title> Today's Games </Title>
    <Container>
      {props.odds && props.odds.map(match => (
        <Match key={match.id} newMatch={match} poolId={props.poolId} />
      ))}
    </Container>)
  </Wrapper>
)

export default LoaderWheel(MatchTable)
