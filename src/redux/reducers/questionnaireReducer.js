import * as types from "../actions/actionTypes";
import { initialQuestionnaireState } from "./initialState";

const questionnaireReducer = (state = initialQuestionnaireState, action) => {
  switch (action.type) {
    case types.QUESTIONNAIRE_STEP_ONE_SUCCESS:
      return { ...state, questionnaire: action.payload };
    case types.QUESTIONNAIRE_STEP_ONE_FAILED:
      return { ...state, questionnaire: action.error };
    case types.QUESTIONNAIRE_STEP_TWO_SUCCESS:
      return { ...state, questionnaire: action.payload };
    case types.QUESTIONNAIRE_STEP_TWO_FAILED:
      return { ...state, questionnaire: action.error };
    case types.QUESTIONNAIRE_STEP_THREE_SUCCESS:
      return { ...state, questionnaire: action.payload };
    case types.QUESTIONNAIRE_STEP_THREE_FAILED:
      return { ...state, questionnaire: action.error };
    case types.FETCH_BANKS:
      return { ...state, banks: action.payload }
    case types.FETCH_BANKS_FAILED:
      return { ...state, banks: action.error || null }
    default:
      return state;
  }
};

export default questionnaireReducer;
