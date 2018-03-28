import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: .75em;
  margin: 0 .25em;
  display: flex;
  flex-direction: column;
`

const splitNameString = string => {
  const arr = string.split(' ')
  if(arr.length === 3) return arr[2]
  else return arr[1]
}

const truncate = string => {
  return string.slice(0, 3)
}

const Game = props => (
  <Wrapper>
    <div>
      {truncate(splitNameString(props.game.HomeTeam))}
    </div>
    <div>
      {truncate(splitNameString(props.game.AwayTeam))}
    </div>
  </Wrapper>
)

export default Game
