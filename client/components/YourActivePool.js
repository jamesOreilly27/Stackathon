import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOnePoolThunk } from '../store'

const Wrapper = styled(Link) `
  text-decoration: none;
  color: #F3EDED;
`

const Container = styled.div`
  display: flex;
`

const YourActivePool = ({ pool }) => {
  return (
    <Wrapper to={`/pools/nfl/${pool.id}`}>
      <Container>
        <div>
          {`ID: ${pool.id}`}
        </div>
        <div className="pool-title">
          {pool.title}
        </div>
      </Container>
    </Wrapper>
  )
}
const mapState = state => state

const mapDispatch = dispatch => {
  return {
    getPool(pool) {
      dispatch(fetchOnePoolThunk(pool))
    }
  }
}

export default connect(mapState, mapDispatch)(YourActivePool)
