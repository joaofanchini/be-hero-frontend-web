import React from 'react';

//Objeto necessário para a construção das rotas
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
/**
 * Com o Routes, passamos a configurar as rotas da nossa aplicação por aqui
 * e então colocamos este componente para ser renderizado no App.js, pois ele component
 * repassa, de acordo com o path, para o componente desejado
 */

// Com exact fazemos com que a rota seja identificada pelo caminho todo, e nao apenas um pedaço dela
export default function Routes() {
  // Faz com que seja possível chamar 1 rota por vez
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Logon} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/new-incident' component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
