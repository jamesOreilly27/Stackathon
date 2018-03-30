import React from 'react'
import styled from 'styled-components'
import { PoolLink } from '../components'

const Wrapper = styled.div`
  margin-top: 2vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0A0A0A;
  box-shadow: .1em .1em .3em #9C9;
`

const Title = styled.div`
  padding: .5em;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const UsersActivePools = props => (
  <Wrapper>
    <Title>
      Your Active Pools
    </Title>
    <Container>
      {props.user.pools && props.user.pools.map(pool => {
        return <PoolLink key={pool.id} pool={pool} userProfileLink />
      })}
    </Container>
  </Wrapper>
)

export default UsersActivePools
