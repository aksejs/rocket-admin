import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import styled, { ThemeProvider } from 'styled-components';
import App from './src/App';
import { configureStore, history } from 'app/store';

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

const RootWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

let store = configureStore();
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <RootWrapper>
          <App history={history} />
          <GlobalStyle />
        </RootWrapper>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);