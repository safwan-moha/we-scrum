import { connect } from 'react-redux'
import { login } from '../actions'
import LoginCard from '../components/LoginCard'

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.login.error || null,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoginClicked: (data) => login(dispatch, data)
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCard)

export default LoginContainer
