import { combineReducers } from "redux";
import customerAuthReducer from "./customerReducer";
import questionnaireReducer from "./questionnaireReducer";

const rootReducer = combineReducers({
  authentication: customerAuthReducer,
  clientDetails: questionnaireReducer
});

export default rootReducer;
