import { Store, createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import { logger } from 'app/middleware';
import { ApplicationState, rootReducer } from 'app/main/reducers';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['frontState', 'router']
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  let middleware = applyMiddleware(logger, routerMiddleware(history), thunk);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  let store = createStore(persistedReducer, middleware) as Store<
    ApplicationState
  >;

  if (module.hot) {
    module.hot.accept('app/main/reducers', () => {
      const nextReducer = require('app/main/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
