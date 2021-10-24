import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from './Main';
import NotFound from './NotFound';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Main />
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}
