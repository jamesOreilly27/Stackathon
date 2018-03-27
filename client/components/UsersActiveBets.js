import React from 'react'
import styled from 'styled-components'
import { Bet } from '../components'
import { connect } from 'react-redux'

const Wrapper = styled.div`
  width: 95%;
  background-color: #0A0A0A;
  box-shadow: .1em .1em .3em #9C9;
`

const Title = styled.div`
  padding: .5em;
  text-align: center;
`

const UsersActiveBets = props => (
  <Wrapper>
    <Title> Your Active Bets </Title>
    <div>
      {props.user.bets && props.user.bets.map(bet => {
        return <Bet key={bet.id} bet={bet} />
      })}
    </div>
  </Wrapper>
)

const mapState = ({ user }) => ({ user })

export default connect(mapState)(UsersActiveBets)
