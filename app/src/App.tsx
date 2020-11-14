import React from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import routes from './routes';

const App: React.FC<{history: History}> = ({ history }) => (
    <>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </>
);

export default App;
