export const Types = {
  IS_ERROR: "recipes/IS_ERROR"
};

const INITIAL_STATE = {
  data: [],
  error: false
};

export default function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.IS_ERROR:
      return { ...state, error: action.payload.type };

    default:
      return state;
  }
}

export const Creators = {
  isError: type => ({
    type: Types.IS_ERROR,
    payload: { type }
  })
};
