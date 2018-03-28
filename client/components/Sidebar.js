import React, { Component } from 'react'
import styled from 'styled-components'
import { Sidelink } from '../components'

const Wrapper = styled.div`
  width: 8vw;
  position: fixed;
  top: 2em;
`

const Container = styled.div`
  height: 100vh; 
  border-radius: .25em;
  background-color: #0A0A0A;
  text-align: center;
`

const Sidebar = () => (
  <Wrapper>
    <Container>
      <h2> Sports </h2>
      <Sidelink path="nfl" />
      <Sidelink path="nba" />
      <Sidelink path="mlb" />
    </Container>
  </Wrapper>
)

export default Sidebar
