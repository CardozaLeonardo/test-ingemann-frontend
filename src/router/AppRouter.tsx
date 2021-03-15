import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  HomeScreen,
  ItemsScreen,
  BillingScreen,
  NotFoundScreen,
} from '../screens/index';

interface Props {}

const AppRouter: FC<Props> = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/items" component={ItemsScreen} exact />
          <Route path="/billing" component={BillingScreen} exact />
          <Route path="*" component={NotFoundScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
