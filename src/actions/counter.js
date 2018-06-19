// Imperative actions
export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';

// Action creators
export const increment = (identifier = 'default') => ({
  type: INCREMENT,
  payload: identifier,
});
export const decrement = (identifier = 'default') => ({
  type: DECREMENT,
  payload: identifier,
});
