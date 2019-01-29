export const Types = {
  HANDLE_CHECKS: "recipes/HANDLE_CHECKS"
};

const INITIAL_STATE = {
  data: [],
  error: false,
  counter: 0
};

export default function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.HANDLE_CHECKS:
      let count = state.counter;

      if (action.payload.element.checked) {
        count++;
        valueLimit(count) ? check(action.payload.element, this) : false;
      } else {
        count--;
        if (!valueLimit(count)) {
          uncheck(action.payload.element, this);
        }
      }

      function check(value, component) {
        return Array.prototype.forEach.call(action.payload.checks, value => {
          if (!value.checked) {
            value.disabled = true;
            return { ...state, error: true };
          }
        });
      }

      function uncheck(value, component) {
        return Array.prototype.forEach.call(action.payload.checks, value => {
          if (value.disabled) {
            value.disabled = false;
            return { ...state, error: true };
          }
        });
      }

      function valueLimit(count) {
        return count === 2 ? true : false;
      }
      return { ...state, counter: count };
    default:
      return state;
  }
}

export const Creators = {
  handleChecks: (checks, element) => ({
    type: Types.HANDLE_CHECKS,
    payload: { checks, element }
  })
};
