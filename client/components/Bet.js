import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { gotResultThunk, checkBetThunk } from '../store'
import { MatchDetails } from '../components'
import truncateTeamName from '../../helpers'

const Wrapper = styled.div`
  display: flex;
  font-size: .875em;
  border-radius: .75em;
  justify-content: space-between;
  align-items: center;
  padding: 2vw 0;
  border-bottom: .5vw solid #0A0A0A;
  background-color: ${({ backgroundColor }) => backgroundColor.normal }

  &:hover {
    background-color: ${ ({ backgroundColor }) => backgroundColor.hover }
    transition: .2s;
  }
`

const PickWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8vw;
`

const PickContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const chooseBackgroundColor = bet => {
  if(bet.result && bet.playerWon) return { normal: 'rgba(0, 205, 0, .25);', hover: '#484A50;' } 
  if(bet.result && !bet.playerWon) return { normal: 'rgba(225, 0, 0, .25);', hover: '#484A50' }
  return ''
}

const Bet = ({ bet }) => (
  <Wrapper backgroundColor={chooseBackgroundColor(bet)}>
    <MatchDetails bet={bet} />
    <div>
      {bet.matchTime}
    </div>
    <PickWrapper>
      <div>
        Your Pick
        </div>
      <PickContentContainer>
        <div>
          {truncateTeamName(bet.playerPick)}
        </div>
        <div>
          {bet.odds > 0 ? `+${bet.odds}` : bet.odds}
        </div>
      </PickContentContainer>
    </PickWrapper>
  </Wrapper>
)

export default Bet
