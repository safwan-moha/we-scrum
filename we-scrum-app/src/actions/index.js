export const RESET = 'RESET'
export const LOGIN_CLICKED = 'LOGIN_CLICKED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CREATE_CLICKED = 'CREATE_CLICKED';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_ERROR = 'CREATE_ERROR';

const url = 'http://localhost:8000';

export function login(dispatch, { username, password, sprint }) {
  dispatch({ type: LOGIN_CLICKED, payload: { sprint, username } });

  const headers = new Headers({
    'content-type': 'application/json',
  });

  return fetch(`${url}/jira/getSprint`, {
    method: "POST",
    headers,
    body: JSON.stringify({ username, password, sprint })
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res });
    })
    .catch(error => {
      dispatch({ type: LOGIN_ERROR, payload: error });
      console.log(error);
    });
}

export function createExcel(dispatch, { username, sprint, ticketList }) {
  dispatch({ type: CREATE_CLICKED });

  const headers = new Headers({
    'content-type': 'application/json',
  });

  return fetch(`${url}/excel/createSheet`, {
    method: "POST",
    headers,
    body: JSON.stringify({ username, data: ticketList, title: sprint })
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      dispatch({ type: CREATE_SUCCESS, payload: res });
    })
    .catch(error => {
      dispatch({ type: CREATE_ERROR, payload: error });
      console.log(error);
    });
}
