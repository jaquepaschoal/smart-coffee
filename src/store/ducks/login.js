import { setToken } from "../../services/auth";
export const Types = {
  ADD_USER_REQUEST: "login/ADD_USER",
  ADD_USER_SUCCESS: "login/ADD_USER_SUCCESS"
};

const INITIAL_STATE = {
  done: false,
  loading: false
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_USER_SUCCESS:
      setToken(action.payload.data.token);
      return { ...state, loading: false, done: true };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: (name, email, code) => ({
    type: Types.ADD_USER_REQUEST,
    payload: { name, email, code }
  }),

  addUserSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { data }
  })
};
