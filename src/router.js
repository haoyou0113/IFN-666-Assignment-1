import React from 'react';
import App from './app';
import App2 from './App2';
import Home from './Screens/Home/index';
import Stock from './Screens/Home/Stock/index';
import { HashRouter, Route, Switch } from 'react-router-dom';

export default function Router() {
  return (
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/stock' component={Stock} />
        {/*<Route component={Nomatch} /> */}
      </Switch>
    </App>
  );
}
