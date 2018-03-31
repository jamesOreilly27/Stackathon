import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

const StyledLoader = styled.div`
  animation: ${rotate360} 1s linear infinite
`

const SpinWheel = styled.div`
  border: 16px solid #3A3838;
  border-top: 16px solid rgba(33, 198, 0, 0.74);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 20vh;
  `

const LoaderWheel = (WrappedComponent) => {
  return class LoaderWheel extends Component {
    render() {
      return this.props.odds.length ? <WrappedComponent  { ...this.props } /> : <StyledLoader> <SpinWheel /> </StyledLoader>
    }
  }
}

export default LoaderWheel
