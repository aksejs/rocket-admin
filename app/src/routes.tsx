import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const ChatPage = lazy(() => import('@pages/Chat'));
const MainPage = lazy(() => import('@pages/MainPage'));

//todo: Loader for fallback;

const routes = (
   <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/chat/:type" component={ChatPage} />

        <Redirect from="/chat" to="/chat/accounts" />
        <Redirect from="*" to="/" />
      </Switch>
  </Suspense>
);

export default routes;
