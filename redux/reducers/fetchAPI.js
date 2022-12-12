import { fetchAPI } from "../actionTypes";

const initialState = {
  fetchAPI: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case fetchAPI: {
      const {} = action.payload
      return {
        ...state,
        fetchAPI: action.payload.task
      };
    }
    default:
      return state;
  }
}