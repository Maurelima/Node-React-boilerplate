import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/Home" exact component={Home} isPrivate />
    </Switch>
);
export default Routes;
