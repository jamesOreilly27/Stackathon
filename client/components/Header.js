import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../components'
import { Link } from 'react-router-dom'

const Wrapper = styled.header`
  width: 100vw;
  position: fixed;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #FAFAFA;
  background-color: #0A0A0A;
`

const HomeLink = styled(Link)`
  font-size: 2em;
  text-decoration: none;
  text-shadow: .02em .02em .1em #F3EDED;
  color: #F3EDED;
  font-family: 'Vollkorn SC', serif;
`

const Header = () => (
  <Wrapper>
    <Container>
      <HomeLink to='/'>
        Crypto Book-E
      </HomeLink>
      <div className="navbar">
        <Navlink name="Login" />
        <Navlink name="Sign-Up" />
      </div>
    </Container>
  </Wrapper>
)

export default Header
