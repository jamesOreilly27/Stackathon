import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  border-radius: .3em;

  &:hover {
    background-color: rgba(33, 198, 0, 0.74);
    transition: all .2s;
  }
`

const StyledLink = styled(Link)`
  text-shadow: .01em .01em .05em #F3EDED;
  text-decoration: none;
  color: #FAFAFA;
  font-size: 1.3em;
`

const Sidelink = ({ path }) => (
  <Container>
    <StyledLink to={`/${path}`}>
      {path.toUpperCase()}
    </StyledLink>
  </Container>
)

export default Sidelink
