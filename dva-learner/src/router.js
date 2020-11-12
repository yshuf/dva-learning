import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage.js';
import ProductList from './routes/ProductPage/ProductPage'

function RouterConfig ({ history }) {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" exact component={IndexPage} />
                    <Route path="/productList" exact component={ProductList} />
                </Switch>
            </div>
        </Router>
    );
}

export default RouterConfig;
