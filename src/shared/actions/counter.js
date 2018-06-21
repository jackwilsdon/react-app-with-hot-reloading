// Imperative actions
export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';

// Action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
