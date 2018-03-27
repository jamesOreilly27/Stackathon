import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5vh;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 .5em;
`

const Select = styled.select`
  font-size: .875em;
`

const PoolCreateSelects = props => (
  <Wrapper>
    <Label>
      Sport
      <Select name="sport" onChange={props.handleChange}>
        <option value= "NFL"> NFL </option>
        <option value= "NBA"> NBA </option>
      </Select>
    </Label>
    <Label>
      Entry Fee
      <Select name="entryFee" onChange={props.handleChange}>
        {[50, 100, 150, 200].map(fee => {
          return <option key={fee} value={fee}>{`${fee} points`}</option>
        })}
      </Select>
    </Label>
  </Wrapper>
)

export default PoolCreateSelects
