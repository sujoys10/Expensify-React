import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFound from '../components/NotFound.js';
import Header from '../components/Header.js';

const AppRouter = () => (   
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;