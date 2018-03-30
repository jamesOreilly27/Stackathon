import React from 'react'
import styled from 'styled-components'
import { Bet } from '../components'
import { connect } from 'react-redux'

const Wrapper = styled.div`
  margin: 1.5vw auto;
  width: 100%;
`

const Title = styled.div`
  padding: .5em;
  text-align: center;
`

const BetsContainer = styled.div`
  margin: 2vw 0;
  background-color: #0A0A0A;
  box-shadow: .1em .1em .3em #9C9;
  padding: 0 .75vw;
`

const UsersBets = ({ bets }) => (
  <Wrapper>
    <BetsContainer>
      <Title> Settled Bets </Title>
      {bets &&
        bets.filter(bet => bet.final)
        .map(finishedBet => {
          return <Bet key={finishedBet.id} bet={finishedBet} finished won={finishedBet.playerWon}/>
        })
      }
    </BetsContainer>
    <BetsContainer>
      <Title> Active Bets </Title>
      {bets &&
        bets.filter(bet => !bet.final)
        .map(activeBet => {
          return <Bet key={activeBet.id} bet={activeBet} />
        })
      }
    </BetsContainer>
  </Wrapper>
)

const mapState = ({ user }) => ({ user })

export default connect(mapState)(UsersBets)
