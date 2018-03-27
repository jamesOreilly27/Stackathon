import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`

`

const MatchDetails = ({ bet }) => (
  <Wrapper>
    <div>
      {bet.awayTeam}
    </div>
    <div>
      @
    </div>
    <div>
      {bet.homeTeam}
    </div>
  </Wrapper>
)

export default MatchDetails
