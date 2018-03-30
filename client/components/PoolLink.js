import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  color: #F3EDED;
  height: 4vw;
  align-items: center;
  padding: 1vw;
  border-bottom: .5vw solid #0A0A0A;
  background-color: rgba(170, 170, 200, .2);

  &:hover {
    background-color: rgba(170, 170, 200, .4);
    transition: .2s;
  }
`

const LeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14vw;
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
        <Container> 
          <div>
            {`Pool ID`} 
          </div>
          <div>
            {`${pool.id}`}
          </div>
        </Container>
        <Container> {pool.title} </Container>
        <Container>
          {this.props.userProfileLink ?
            <div>
              {pool && 
                <div>
                  <div>
                    {`Your Score`}
                  </div>
                  <div>
                    { `${pool.pool_players.poolPoints} points` }
                  </div>
                </div>
              }
            </div>
          :
            <div>
              {pool && this.findLeader(pool.users)}
            </div>
          }
        </Container>
      </Wrapper>
    )
  }
}

export default PoolLink
