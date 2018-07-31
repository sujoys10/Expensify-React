import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LogInPage from '../components/LogInPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFound from '../components/NotFound.js';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (   
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={LogInPage} exact={true} />
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
);

export default AppRouter;