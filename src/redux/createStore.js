import actions from './actions';
import { createStore } from 'redux';
import reducer from './reducer';

export default (initialState = {}) => {
  // Create a new store with the root reducer, initial state we've provided
  // and the redux devtools extension (if we're in development).
  const store = createStore(
    reducer,
    initialState,
    process.env.NODE_ENV === 'production' ||
    !window.__REDUX_DEVTOOLS_EXTENSION__
      ? null
      : window.__REDUX_DEVTOOLS_EXTENSION__({
          actionCreators: actions,
        }),
  );

  // Support reloading reducers if hot reloading is enabled.
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const reducer = require('./reducer').default;

      store.replaceReducer(reducer);
    });
  }

  return store;
};
