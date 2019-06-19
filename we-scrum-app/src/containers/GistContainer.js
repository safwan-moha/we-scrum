import { connect } from 'react-redux'
import GistView from '../components/GistView'
import { createExcel } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    ticketList: state.login.ticketList || [],
    username: state.login.username || '',
    email: state.login.email || '',
    sprint: state.login.sprint || '',
    loading: state.login.loading || false,
    logged: state.login.logged || false,
    link: state.login.link || null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createExcel: (data) => createExcel(dispatch, data)
  }
}

const GistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GistView)

export default GistContainer
