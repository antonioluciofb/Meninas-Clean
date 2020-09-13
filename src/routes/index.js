import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

// import { Container } from './styles';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

export default Routes;