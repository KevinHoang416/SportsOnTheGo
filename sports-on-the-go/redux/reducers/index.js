import { combineReducers } from "redux";
import fetchAPI from "./fetchAPI";
import searchTeams from "./searchTeams";
export default combineReducers({fetchAPI, searchTeams})