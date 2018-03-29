import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: space-around;
  color: #F3EDED;
  width:100%;
  height: 4vw;
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
  width: 15vw;
`

class PoolLink extends Component {
  constructor(props) {
    super(props)
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
        <div> {leader} </div>
        <div> {`${highScore} Points`} </div>
      </LeaderContainer>
    )
  }

  render() {
    const pool = this.props.pool
    return (
      <Wrapper to={`/pools/${pool.sport}/${pool.id}`}>
        <div> {`Pool ID: ${pool.id}`} </div>
        <div> {pool.title} </div>
        <div>
          {this.props.userProfileLink ?
            <div>
              {pool && `your score: ${pool.pool_players.poolPoints} points`}
            </div>
          :
            <div>
              {pool && this.findLeader(pool.users)}
            </div>
          }
        </div>
      </Wrapper>
    )
  }
}

export default PoolLink
