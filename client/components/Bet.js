import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { gotResultThunk, checkBetThunk } from '../store'
import { MatchDetails } from '../components'
import truncateTeamName from '../../helpers'

const Wrapper = styled.div`
  display: flex;
  font-size: .875em;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 0;
  border-bottom: 1px solid rgba(33, 198, 0, 0.74);
  margin-bottom: 1vh;

  &:hover {
    background-color: #484A50;
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

const Bet = ({ bet }) => (
  <Wrapper>
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
