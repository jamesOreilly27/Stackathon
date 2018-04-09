import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { auth } from '../../store'
import AuthForm from '../components'

const mapState = state => ({
  displayName: 'Login',
  error: state.user.error
})

const mapDispatch = (dispatch, ownProps) => ({
  handleSubmit (email, password, role) {
    dispatch(authLogin(email, password, ownProps.history))
  }
})

const Login = withRouter(connect(mapState, mapDispatch)(AuthForm))

export default Login
