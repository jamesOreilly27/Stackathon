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

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
`

const Header = () => (
  <Wrapper>
    <Container>
      <HomeLink to='/'>
        Crypto Book-E
      </HomeLink>
      <Navbar>
        <Navlink name="Login" />
        <Navlink name="Sign-Up" />
      </Navbar>
    </Container>
  </Wrapper>
)

export default Header
