import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ThemeOptions from "./ThemeOptions";
import Layout from "./Layout";
import Auth from "./Auth";
import courseVisits from "./courseVisitsReducer";
import allUser from "./users";
import promoCodes from "./promoCodes";
import referralCodes from "./referralCodes";
import promoCodeLogs from "./promoCodeLog";
import paymentLogs from "./paymentLog";
import burnLogs from "./burnLog";
import cryptoLogs from "./cryptoLog";

export default {
  auth: Auth,
  ThemeOptions,
  Layout,
  form: formReducer,
  courseVisits: courseVisits,
  allUsers: allUser,
  promoCodes: promoCodes,
  referralCodes: referralCodes,
  promoCodeLogs: promoCodeLogs,
  burnLogs: burnLogs,
  paymentLogs: paymentLogs,
  cryptoLogs: cryptoLogs
};
