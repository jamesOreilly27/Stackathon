import React from 'react'
import styled from 'styled-components'
import { YourActivePool } from '../components'

const Wrapper = styled.div`
  width: 95%;
  margin: 2vh 0;
  background-color: #0A0A0A;
  box-shadow: .1em .1em .3em #9C9;
`

const Title = styled.div`
  padding: .5em;
  text-align: center;
`

const UsersActivePools = props => (
  <Wrapper>
      <Title>
        Your Active Pools
      </Title>
      <div className="active-pools2x2">
        {props.user.pools && props.user.pools.map(pool => {
          return <YourActivePool key={pool.id} pool={pool} />
        })}
      </div>
  </Wrapper>
)

export default UsersActivePools


