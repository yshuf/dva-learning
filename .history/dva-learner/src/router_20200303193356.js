import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
            <Switch>
                <Route path="/" exact component={IndexPage} />
            </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;
