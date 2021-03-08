import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './screens/Welcome/Welcome';
import Menu from './screens/Menu/Menu';

const App = () => (
  <Switch>
    <Route path='/' component={Welcome} exact />
    <Route path='/menu/:name/:table' component={Menu} exact />
  </Switch>
);

export default App;
