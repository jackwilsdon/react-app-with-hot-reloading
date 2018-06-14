import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import actions from './actions';
import { connectRoutes } from 'redux-first-router';
import createBrowserHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import routes from '../router/routes';

const composeEnhancers =
  process.env.NODE_ENV === 'production' ||
  !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionCreators: actions,
      });

export default (initialState = {}) => {
  const history = createBrowserHistory();
  const { reducer, middleware, enhancer } = connectRoutes(history, routes);

  const rootReducer = combineReducers({
    ...reducers,
    location: reducer,
  });

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(enhancer, applyMiddleware(middleware)),
  );

  // Support reloading reducers if hot reloading is enabled.
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;

      const rootReducer = combineReducers({
        ...reducers,
        location: reducer,
      });

      store.replaceReducer(rootReducer);
    });
  }

  return store;
};
