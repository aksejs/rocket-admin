import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { configureStore, history } from 'app/store';
import App from './src/App';

import { colors } from '@styles/variables';
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

// prepare store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RootWrapper>
        <App history={history} />
        <GlobalStyle />
      </RootWrapper>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);