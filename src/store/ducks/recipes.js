export const Types = {
  IS_ERROR: "recipes/IS_ERROR",
  GET_REQUEST: "recipes/GET_REQUEST",
  GET_SUCCESS: "recipes/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.IS_ERROR:
      return { ...state, error: action.payload.type };
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  isError: type => ({
    type: Types.IS_ERROR,
    payload: { type }
  }),

  getRecipesRequest: () => ({ type: Types.GET_REQUEST }),
  getRecipesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
