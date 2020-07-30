import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route path="/cadastro/video" component={CadastroVideo}  />
      <Route path="/cadastro/categoria" component={CadastroCategoria}  />
      <Route component={() => (<div>Pagina 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
