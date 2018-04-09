import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vw;
`

const Label = styled.label`
  width: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubmitButton = styled.button`
  width: 10vw;
  height: 5vw;
  border-radius: .5vw;
  font-size: .875em;
`

const Input = styled.input`
  width: 10vw;
  height: 2vw;
  border-radius: .3em;
  font-size: .875em;
`

const AuthFormPresenter = ({ displayName, handleSubmit, error, isSignup }) => (

)