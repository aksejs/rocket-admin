import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Chat from 'app/pages/Chat';
import MainPage from 'app/pages/MainPage';

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/chat/:type" render={(props) => <Chat props={props} />} />
      <Redirect from="/chat" to="/chat/accounts" />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default routes;