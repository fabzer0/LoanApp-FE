import * as types from "../actions/actionTypes";
import { initialAuthenticationState } from "./initialState";

const customerAuthReducer = (state = initialAuthenticationState, action) => {
  switch (action.type) {
    case types.FETCH_USER:
      return { ...state, isLoggedIn: action.payload || false };
    case types.FETCH_ERROR:
      return { ...state, isLoggedIn: action.error || false };
    case types.SUCCESSFUL_REGISTRATION:
      return { ...state, registration: action.payload };
    case types.REGISTRATION_FAILED:
      return { ...state, registration: action.error };
    case types.SUCCESSFUL_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload || false,
        login: action.payload
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: action.error || false,
        login: action.error
      };
    case types.SUCCESSFUL_VERIFICATION:
      return { ...state, login: action.payload };
    case types.VERIFICATION_FAILED:
      return { ...state, login: action.error };
    case types.SUCCESS_FORGOT_PASSWORD:
      return { ...state, password: { forgotPass: action.payload } };
    case types.FORGOT_PASSWORD_FAILED:
      return { ...state, password: { forgotPass: action.error } };
    case types.SUCCESS_RESET_PASSWORD:
      return { ...state, password: { resetPass: action.payload } };
    case types.RESET_PASSWORD_FAILED:
      return { ...state, password: { resetPass: action.error } };
    case types.RECEIVED_QUICKBOOKS_ACCESS_TOKEN:
      return { ...state, oauth2: action.payload };
    case types.FAILED_RETRIEVING_QUICKBOOKS_ACCESS_TOKEN:
      return { ...state, oauth2: action.error };
    default:
      return state;
  }
};

export default customerAuthReducer;
