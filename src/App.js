import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './screens/Welcome/Welcome';

const App = () => (
  <Switch>
    <Route path='/' component={Welcome} />
  </Switch>
);

export default App;
