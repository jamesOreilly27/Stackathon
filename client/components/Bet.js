import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchMatchThunk } from '../store'
import { MatchDetails } from '../components'

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

const Bet = props => {
  const bet = props.bet
  return (
    <Wrapper>
      <MatchDetails bet={bet} />
      <div>
        {bet.matchTime}
      </div>
        <div className="bet-user-info">
          <div>
            Your Pick
          </div>
          <div>
            <div>
              {bet.playerPick}
            </div>
            <div>
              {bet.odds > 0 ? `+${bet.odds}` : bet.odds}
            </div>
          </div>
        </div>
    </Wrapper>
  )
}

export default Bet
