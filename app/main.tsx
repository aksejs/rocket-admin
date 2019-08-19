import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore, history } from 'app/store';
import App from './src/App';

import { colors } from '@styles/variables/colors';
import { ResetStyle } from '@styles/base/reset';
import { GeneralStyle } from '@styles/base/general';

const GlobalStyle = () => (
  <>
    <GeneralStyle />
    <ResetStyle />
  </>
);

const theme = {
  ...colors
};

let store = configureStore();
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <>
          <App history={history} />
          <GlobalStyle />
        </>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);