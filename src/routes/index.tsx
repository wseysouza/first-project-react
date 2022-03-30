import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  // (Switch) faz com que uma rota seja executada por vez
  // route esta buscando cada rota, o (exact) esta buscando a rota exata com o (/)
  // (path) nome que eu quero para minha rota na web
  // (component) é referente a pagina que deve abrir
  <Switch>
    <Route exact path="/" component={Dashboard} />

    <Route path="/Repository" component={Repository} />
  </Switch>
);

export default Routes;
