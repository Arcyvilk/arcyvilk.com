import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}
