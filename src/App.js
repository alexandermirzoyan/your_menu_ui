import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Welcome from './screens/Welcome/Welcome';
import Menu from './screens/Menu/Menu';

const App = () => (
  <>
    <Switch>
      <Route path='/' component={Welcome} exact />
      <Route path='/menu/:entityId/:entityTable' component={Menu} exact />
    </Switch>
    <ToastContainer />
  </>
);

export default App;
