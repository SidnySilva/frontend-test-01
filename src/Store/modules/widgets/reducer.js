import { CREATE, DELETE, GET, UPDATE } from "./actionType";

const token = localStorage.getItem("@Widget:token") || "";

const defaultState = {
  token,
};

const widgetReducer = (state = defaultState, action) => {
  const { data } = action;
  switch (action.type) {
    case CREATE:
      return { ...state, data };

    case DELETE:
      return { ...state, data };

    case GET:
      return { ...state, data };

    case UPDATE:
      return { ...state, data };

    default:
      return state;
  }
};

export default widgetReducer;
