import React from 'react'
import styled from 'styled-components'
import { PoolLink } from '../components'

const Wrapper = styled.div`
  margin-top: 2vw;
  width: 100%;
`

const Title = styled.div`
  padding: .5em;
  text-align: center;
`

const PoolsContainer = styled.div`
  margin-bottom: 2vw;
  background-color: #0A0A0A;
  box-shadow: .1em .1em .3em #9C9;
  padding: 0 .75vw;
`

const UsersPools = props => (
  <Wrapper>
      <PoolsContainer>
        <Title>
          Your Active Pools
        </Title>
          {props.user.pools && props.user.pools.map(pool => {
            return <PoolLink key={pool.id} pool={pool} userProfileLink />
          })}
      </PoolsContainer>
  </Wrapper>
)

export default UsersPools
