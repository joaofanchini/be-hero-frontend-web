import React from 'react'; // Necessário importar em todas os scripts esse import do react

import Header from './Header';

function App() {
  return (
    <Header title='Olá'>
      <h2>Mundo</h2>
    </Header>
  );
  // tag HTML retornada pelo JavaScript é chamada de JSX (JavaScript XML Syntax
}

export default App;

/**
 * Outro detalhe no React é que o arquivo que ele irá ler sempre primeiro é o arquivo
 * index.html (Ele é o principal arquivo que será utilizado para linkar as divs que serão
 * criadas)
 */
