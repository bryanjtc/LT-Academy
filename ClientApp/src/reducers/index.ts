import currentUser, { CurrentUserData } from "./currentUser";
import currentAlert, { CurrentAlertData } from "./currentAlert";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  currentUser,
  currentAlert,
});

export default rootReducer;

export type { CurrentUserData, CurrentAlertData };
