import axios from "axios";
import * as types from "./actionTypes";

const startStepOne = () => {
  return {
    type: types.START_STEP_ONE_QUESTIONNAIRE
  };
};

const completeStepOne = payload => {
  return {
    type: types.QUESTIONNAIRE_STEP_ONE_SUCCESS,
    payload
  };
};

const stepOneFailed = error => {
  return {
    type: types.QUESTIONNAIRE_STEP_ONE_FAILED,
    error
  };
};

const startStepTwo = () => {
  return {
    type: types.START_STEP_TWO_QUESTIONNAIRE
  };
};

const completeStepTwo = payload => {
  return {
    type: types.QUESTIONNAIRE_STEP_TWO_SUCCESS,
    payload
  };
};

const stepTwoFailed = error => {
  return {
    type: types.QUESTIONNAIRE_STEP_TWO_FAILED,
    error
  };
};

const startStepThree = () => {
  return {
    type: types.START_STEP_THREE_QUESTIONNAIRE
  };
};

const completeStepThree = payload => {
  return {
    type: types.QUESTIONNAIRE_STEP_THREE_SUCCESS,
    payload
  };
};

const stepThreeFailed = error => {
  return {
    type: types.QUESTIONNAIRE_STEP_THREE_FAILED,
    error
  };
};

const fetchBanks = country => {
  const apiUrl = `/api/v1/get_banks?country=${country}`;
  return async dispatch => {
    try {
      const response = await axios.get(apiUrl);
      dispatch({ type: types.FETCH_BANKS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.FETCH_BANKS_FAILED, error: error.response.data });
    }
  };
};

const submitFirstStepQuestionnaire = payload => {
  const apiUrl = "/api/v1/questionnaire-step-1";
  return dispatch => {
    dispatch(startStepOne());
    return axios
      .post(apiUrl, payload)
      .then(response => dispatch(completeStepOne(response.data)))
      .catch(error => dispatch(stepOneFailed(error.response.data)));
  };
};

const submitSecondStepQuestionnaire = payload => {
  const apiUrl = "/api/v1/questionnaire-step-2";
  return dispatch => {
    dispatch(startStepTwo());
    return axios
      .put(apiUrl, payload)
      .then(response => dispatch(completeStepTwo(response.data)))
      .catch(error => dispatch(stepTwoFailed(error.response.data)));
  };
};

const submitThirdStepQuestionnaire = payload => {
  const apiUrl = "/api/v1/questionnaire-step-3";
  return dispatch => {
    dispatch(startStepThree());
    return axios
      .put(apiUrl, payload)
      .then(response => dispatch(completeStepThree(response.data)))
      .catch(error => dispatch(stepThreeFailed(error.response.data)));
  };
};

export {
  submitFirstStepQuestionnaire,
  submitSecondStepQuestionnaire,
  submitThirdStepQuestionnaire,
  fetchBanks
};
