import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ leftSide }) => leftSide ? '' : 'transform: rotate(180deg);'}
`

const Checkbox = styled.div`
  width: 1.75vw;
  height: 1.75vw;
  position: absolute;
	background: #DDD;
	border-radius: 100%;
	box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
`

const CheckboxLabel = styled.label`
  display: block;
  width: 1.35vw;
  height: 1.35vw;
  border-radius: 100%;

  transition: all .5s ease;
  position: absolute;
  top: ${({ leftSide }) => leftSide ? '.21vw' : '.2vw;'}
  left: ${({ leftSide }) => leftSide ? '.24vw' : '.2vw;'}
  cursor: pointer;
  z-index: 1;

  background: ${({ checked }) => checked ? 'rgba(33, 198, 0, 0.74);' : '#0A0A0A;'}
  box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);

  &:hover {
    background-color: rgba(33, 198, 0, 0.74);
  }
`

const BetDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: .875em;
  width: 20vw;
  ${({ leftSide }) => leftSide ? '' : 'transform: rotate(180deg);'}
`

const TeamDetails = ({ name, pointSpread, checked, homeOrAway, leftSide, handleChange }) => (
  <Wrapper leftSide={leftSide}>
    <Checkbox>
      <CheckboxLabel checked={checked} leftSide={leftSide}>
        <input
          type="checkbox"
          name={`${homeOrAway}-box`}
          onChange={handleChange}
          value={[name, pointSpread]}
          checked={checked}
          id={`${homeOrAway}Checkbox`}
          style={{ visibility: "hidden" }}
        />
      </CheckboxLabel>
    </Checkbox>
    <BetDetailContainer leftSide={leftSide}>
      <div>
        {name}
      </div>
      <div> 
        {parseFloat(pointSpread) > 0 ?  ` +${pointSpread}` : `${pointSpread}` }
      </div>
    </BetDetailContainer>
  </Wrapper>
)

export default TeamDetails
