import axios from "axios";
import * as types from "./actionTypes";

const startRegistration = () => {
  return {
    type: types.START_REGISTRATION
  };
};

const registerCustomer = payload => {
  return {
    type: types.SUCCESSFUL_REGISTRATION,
    payload
  };
};

const failedRegistration = error => {
  return {
    type: types.REGISTRATION_FAILED,
    error
  };
};

const startLoggingIn = () => {
  return {
    type: types.START_LOGGING_IN
  };
};

const loginCustomer = payload => {
  return {
    type: types.SUCCESSFUL_LOGIN,
    payload
  };
};

const failedLogin = error => {
  return {
    type: types.LOGIN_FAILED,
    error
  };
};

const startVerification = () => {
  return {
    type: types.START_VERIFICATION
  };
};

const verifyCustomer = payload => {
  return {
    type: types.SUCCESSFUL_VERIFICATION,
    payload
  };
};

const failedVerification = error => {
  return {
    type: types.VERIFICATION_FAILED,
    error
  };
};

const startRetrievingQuickbooksAccessToken = () => {
  return {
    type: types.START_RETRIEVING_QUICKBOOKS_ACCESS_TOKEN
  };
};

const receivedQuickbooksAccessToken = payload => {
  return {
    type: types.RECEIVED_QUICKBOOKS_ACCESS_TOKEN,
    payload
  };
};

const failedRetrievingQuickbooksAccessToken = error => {
  return {
    type: types.FAILED_RETRIEVING_QUICKBOOKS_ACCESS_TOKEN,
    error
  };
};

const startForgotPassword = () => {
  return {
    type: types.START_FORGOT_PASSWORD
  };
};

const successForgotPassword = payload => {
  return {
    type: types.SUCCESS_FORGOT_PASSWORD,
    payload
  };
};

const failedForgotPassword = error => {
  return {
    type: types.FORGOT_PASSWORD_FAILED,
    error
  };
};

const startResetPassword = () => {
  return {
    type: types.START_RESET_PASSWORD
  };
};

const successResetPassword = payload => {
  return {
    type: types.SUCCESS_RESET_PASSWORD,
    payload
  };
};

const failedResetPassword = error => {
  return {
    type: types.RESET_PASSWORD_FAILED,
    error
  };
};

const register = payload => {
  const apiUrl = "/api/v1/register";
  return dispatch => {
    dispatch(startRegistration());
    return axios
      .post(apiUrl, payload)
      .then(response => dispatch(registerCustomer(response.data)))
      .catch(error => dispatch(failedRegistration(error.response.data)));
  };
};

const fetchUser = () => {
  const apiUrl = "/api/current_user";
  return async dispatch => {
    try {
      const response = await axios.get(apiUrl);
      dispatch({ type: types.FETCH_USER, payload: response.data });
    } catch (err) {
      dispatch({ type: types.FETCH_ERROR, error: err.response.data });
    }
  };
};

const login = payload => {
  const apiUrl = "/api/login";
  return dispatch => {
    dispatch(startLoggingIn());
    return axios
      .post(apiUrl, payload)
      .then(response => dispatch(loginCustomer(response.data)))
      .catch(error => dispatch(failedLogin(error.response.data)));
  };
};

const verify = url => {
  return dispatch => {
    dispatch(startVerification());
    return axios
      .get(url)
      .then(response => dispatch(verifyCustomer(response.data)))
      .catch(error => dispatch(failedVerification(error.response.data)));
  };
};

const retrieveQuickbooksTokens = url => {
  const apiUrl = "/api/v1/retrieveAccessToken";
  return dispatch => {
    dispatch(startRetrievingQuickbooksAccessToken());
    return axios
      .get(apiUrl, {
        params: {
          url
        }
      })
      .then(response => dispatch(receivedQuickbooksAccessToken(response.data)))
      .catch(error =>
        dispatch(failedRetrievingQuickbooksAccessToken(error.response.data))
      );
  };
};

const forgotPassword = payload => {
  const apiUrl = "/api/v1/forgotPassword";
  return dispatch => {
    dispatch(startForgotPassword());
    return axios
      .post(apiUrl, payload)
      .then(response => dispatch(successForgotPassword(response.data)))
      .catch(error => dispatch(failedForgotPassword(error.response.data)));
  };
};

const resetPassword = (payload, token) => {
  const apiUrl = `/api/v1/resetPassword?token=${token}`;
  return dispatch => {
    dispatch(startResetPassword());
    return axios
      .post(apiUrl, payload)
      .then(response => dispatch(successResetPassword(response.data)))
      .catch(error => dispatch(failedResetPassword(error.response.data)));
  };
};

const googleCallback = () => {
  const apiUrl = "/api/login_success";
  return dispatch => {
    dispatch(startLoggingIn());
    return axios
      .get(apiUrl)
      .then(response => dispatch(loginCustomer(response.data)))
      .catch(error => dispatch(failedLogin(error.response.data)));
  };
};

export {
  fetchUser,
  register,
  login,
  verify,
  retrieveQuickbooksTokens,
  forgotPassword,
  resetPassword,
  googleCallback
};
