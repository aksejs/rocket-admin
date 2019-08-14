import { Store, createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import { logger } from 'app/middleware';
import { ApplicationState, rootReducer } from 'app/reducers';

export const history = createBrowserHistory();

export function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  let middleware = applyMiddleware(logger, routerMiddleware(history));

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer(history) as any, initialState as any, middleware) as Store<
    ApplicationState
  >;

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
