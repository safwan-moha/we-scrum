import { combineReducers } from 'redux'
import {
  LOGIN_SUCCESS, LOGIN_CLICKED, LOGIN_ERROR,
  CREATE_SUCCESS, CREATE_CLICKED, CREATE_ERROR
} from './../actions'

let initialState = { ticketList: [], logged: false }

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CLICKED:
      return Object.assign({}, state, { sprint: action.payload.sprint, username: action.payload.username, loading: true, ticketList: [], error: '' })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { logged: true, ticketList: action.payload.jira, link: action.payload.link, loading: false })
    case LOGIN_ERROR:
      return Object.assign({}, state, { loading: false, error: action.payload })
    case CREATE_CLICKED:
      return Object.assign({}, state, { loading: true, error: '' })
    case CREATE_SUCCESS:
      return Object.assign({}, state, { logged: true, link: action.payload.link, loading: false })
    case CREATE_ERROR:
      return Object.assign({}, state, { loading: false, error: action.payload })
    default:
      return state
  }
}

const weReducer = combineReducers({
  login
})

export default weReducer
