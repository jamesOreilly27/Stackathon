import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  border-radius: .3em;

  &:hover {
    background-color: rgba(33, 198, 0, 0.74);
    transition: all .8s;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #F3EDED;
  text-shadow: .01em .01em .05em #F3EDED;
  font-size: 1.3em;
  padding: .7em .5em 0;
  margin: 0;
`

const Navlink = ({ name }) => (
  <Container>
    <StyledLink to={name}>
      {name}
    </StyledLink>
  </Container>
)

export default Navlink
