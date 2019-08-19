import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { FallbackLoader } from '@common/styles';

const ChatPage = lazy(() => import('@pages/ChatPage'));
const MainPage = lazy(() => import('@pages/MainPage'));

//todo: Add good loader for fallback (or skeleton);

const routes = (
   <Suspense fallback={<FallbackLoader><img src="https://i.pinimg.com/originals/a7/12/3a/a7123a124ba35c74c421e1678e2bb677.gif" /></FallbackLoader>}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/chat/:type" component={ChatPage} />

        <Redirect from="/chat" to="/chat/accounts" />
        <Redirect from="*" to="/" />
      </Switch>
  </Suspense>
);

export default routes;
