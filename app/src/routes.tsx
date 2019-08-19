import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Chat from '@pages/Chat';
import MainPage from '@pages/MainPage';

const routes = (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/chat/:type" component={Chat} />
      
      <Redirect from="/chat" to="/chat/accounts" />
      <Redirect from="*" to="/" />
    </Switch>
);

export default routes;