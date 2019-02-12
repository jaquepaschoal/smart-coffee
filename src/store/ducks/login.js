export const Types = {
  ADD_USER: "login/ADD_USER",
  ADD_USER_SUCCES: "login/ADD_USER_SUCCES"
};

const INITIAL_STATE = {
  name: '',
  email: '',
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER:
      console.log(action.payload.name, action.payload.email)
    
    default:
      return state;
  }
}

export const Creators = {
  addUser: (name, email) => ({
    type: Types.ADD_USER,
    payload: { name, email }
  })
};
