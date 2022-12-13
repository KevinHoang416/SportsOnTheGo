import { FILTER_TEAM, SET_TEAM, SET_SEARCH } from "../actionTypes";

const initialState = {
    teamList: {},
    filteredTeamList: {},
    searchState: "",
};

export default function (state = initialState, action) {
    if (action.type == SET_TEAM) {
        return ({
            ...state,
            teamList: action.payload.teams
        })
    } else if (action.type == FILTER_TEAM) {
        return ({
            ...state,
            filteredTeamList: action.payload.filteredTeams
        })
    } else if (action.type == SET_SEARCH) {
        return ({
            ...state,
            searchState: action.payload.text
        })
    } else {
        return state
    }
}