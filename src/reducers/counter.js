import { DECREMENT, INCREMENT } from '../actions';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload]: (state[payload] || 0) + 1,
      };
    case DECREMENT:
      return {
        ...state,
        [payload]: (state[payload] || 0) - 1,
      };
    default:
      return state;
  }
};
