import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { authSignUp } from '../store'
import { AuthForm } from '../components'

const mapState = state => ({
  displayName: 'Sign Up',
  isSignup: true,
  error: state.user.error
})

const mapDispatch = (dispatch, ownProps) => ({
  handleSubmit(userName, email, password) {
    dispatch(authSignUp(userName, email, password, ownProps.history))
  }
})

const SignUp = withRouter(connect(mapState, mapDispatch)(AuthForm))

export default SignUp
