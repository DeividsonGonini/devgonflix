import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//Criada pagina 404 Não Encontrado
const Pagina404 = () => (<div> Página 404</div>)


ReactDOM.render(
  //BrowserRouter: Representa as Rotas dos navegadores ->para Trabalhar com rotas transformando em uma SPA
  <BrowserRouter>

    <Switch>
      {/* Exact: para garantir que a rota esteja correta, nesse caso garantindo a Home*/}
      <Route path="/" component={Home} exact />

      {/* Route: faz as rotas */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />


      {/* Rota para pagina 404  */}
      <Route component={Pagina404} />


    </Switch>
  </BrowserRouter>,


  document.getElementById('root')
);