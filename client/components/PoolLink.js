import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fetchOnePoolThunk } from '../store'

const Wrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  color: #F3EDED;
  width:100%;
  align-items: center;
  padding: .5vw 0;
  border-bottom: 1px solid green;

  &:hover {
    background-color: #484A50;
    transition: .2s; 
  }
`

const LeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class PoolLink extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPool(this.props.pool.id)
  }

  findLeader(players) {
    let leader;
    let highScore = 0;
    players.forEach(player => {
      if (player.pool_players.poolPoints > highScore) {
        highScore = player.pool_players.poolPoints
        leader = player.userName
      }
    })

    return (
      <LeaderContainer>
        <div> {`Leader`} </div>
        <div> {`${leader} ${highScore} Points`}</div>
      </LeaderContainer>
    )
  }

  render() {
    const pool = this.props.singlePool
    return (
      <Wrapper to={`/pools/${pool.sport}/${pool.id}`}>
      {console.log('ID', pool.id)}
        <div> {`Pool ID: ${pool.id}`} </div>
        <div> {pool.title} </div>
        <div>
          {pool.users && this.findLeader(pool.users)}
        </div>
      </Wrapper>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  getPool(id) {
    dispatch(fetchOnePoolThunk(id))
  }
})

export default connect(mapState, mapDispatch)(PoolLink)
