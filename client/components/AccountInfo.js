import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { UserProfileUpdateForm }  from '../components'
import { updateUserThunk } from '../store'

const Wrapper = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0A0A0A;
  padding: .5em;
  border-radius: .3em;
  box-shadow: .1em .1em .3em #9C9
`

const Title = styled.div`
  text-align: center;
  font-size: 1.6em;
  margin-bottom: .5em;
`
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 28vh;
`

const EditButton = styled.button`
  width: 10em;
  height: 3em;
  border-radius: .5em;
`
class AccountInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { editButtonClicked: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ editButtonClicked: true })
  }

  render() {
    const { firstName, lastName, userName, email, points } = this.props.user
    return (
      <Wrapper>
        <Title> Account Info </Title>
        <ContentContainer>
          <Details>
            <div> {`First Name: ${firstName}`} </div>
            <div> {`Last Name: ${lastName}`} </div>
            <div> {`Username: ${userName}`}</div>
            <div> {`Email: ${email}`}</div>
            <div> {`Available Points: ${points}`} </div>
            <EditButton onClick={this.handleClick}>
              Edit
            </EditButton>
          </Details>
          {this.state.editButtonClicked && <UserProfileUpdateForm handleSubmit={this.props.handleEditSubmit} />}
        </ContentContainer>
      </Wrapper>
    )
  }
}

const mapState = ({ user }) => ({ user })
const mapDispatch = dispatch => {
  return {
    handleEditSubmit(update) {
      dispatch(updateUserThunk(update))
    }
  }
}

export default connect(mapState, mapDispatch)(AccountInfo)
