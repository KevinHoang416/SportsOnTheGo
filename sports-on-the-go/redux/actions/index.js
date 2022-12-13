import { FILTER_TEAM, SET_TEAM, SET_SEARCH, fetchAPI } from "../actionTypes";

export const fetchAPIS = (task) => ({
  type: fetchAPI,
  payload: {
    task: task
  }
});

export const SetTeam = (teams) => ({
    type: SET_TEAM,
    payload: {
        teams: teams
    }
});

export const FilterTeam = (teams) => ({
    type: FILTER_TEAM,
    payload: {
        filteredTeams: teams
    }
});

export const SetSearch = (text) => ({
    type: SET_SEARCH,
    payload: {
        text: text
    }
})