import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 15vw
`

const Label = styled.label`
  display: flex;
  width: 15vw;
  justify-content: space-around;
`

const Input = styled.input`
  width: 4vw;
  height: 1.25vh;
`

const WagerInput = ({ handleChange }) => (
  <Wrapper>
    <Label>
      Wager Amount
      <Input
        type="text"
        onChange={handleChange}
        required
      />
    </Label>
  </Wrapper>
)

export default WagerInput
