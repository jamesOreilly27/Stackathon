import React from 'react'
import styled from 'styled-components'
import { Bet } from '../components'
import { connect } from 'react-redux'

const Wrapper = styled.div`
  width: 100%;
`

const Title = styled.div`
  padding: .5em;
  text-align: center;
`

const BetsContainer = styled.div`
  margin-bottom: 2vw
  background-color: #0A0A0A;
  box-shadow: .1em .1em .3em #9C9;
  padding: 0 .75vw;
`

const UsersBets = ({ bets }) => (
  <Wrapper>
    <BetsContainer>
      <Title> In Progress </Title>
      {bets &&
        bets.filter(bet => !bet.final && bet.result)
        .map(inProgressBet => {
          return <Bet key={inProgressBet.id} bet={inProgressBet} hasScore />
        })
      }
    </BetsContainer>
    <BetsContainer>
      <Title> Settled Bets </Title>
      {bets &&
        bets.filter(bet => bet.final)
        .map(finishedBet => {
          return <Bet key={finishedBet.id} bet={finishedBet} finished won={finishedBet.playerWon} hasScore />
        })
      }
    </BetsContainer>
    <BetsContainer>
      <Title> Active Bets </Title>
      {bets &&
        bets.filter(bet => !bet.final && !bet.result)
        .map(activeBet => {
          return <Bet key={activeBet.id} bet={activeBet} />
        })
      }
    </BetsContainer>
  </Wrapper>
)

const mapState = ({ user }) => ({ user })

export default connect(mapState)(UsersBets)
