import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Label = styled.label`

`

const WagerInput = ({ handleChange }) => {
  <Wrapper>
    <Label>
      <input
        type="text"
        onChange={handleChange}
      />
    </Label>
  </Wrapper>
}

export default WagerInput
