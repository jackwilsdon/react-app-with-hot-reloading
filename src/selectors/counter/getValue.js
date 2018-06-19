export default (state, identifier = 'default') =>
  state.counter[identifier] || 0;
