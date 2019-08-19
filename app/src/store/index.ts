import { Store, createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { ApplicationState, rootReducer } from 'app/common/rootReducer';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['frontState', 'router']
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  let middleware = applyMiddleware(routerMiddleware(history), thunk);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  let store = createStore(persistedReducer, middleware) as Store<
    ApplicationState
  >;

  if (module.hot) {
    module.hot.accept('@common/rootReducer', () => {
      const nextReducer = require('@common/rootReducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
