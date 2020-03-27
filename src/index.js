import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Por padrão o index js também é sempre o primeiro a ser executado
 */

ReactDOM.render(<App />, document.getElementById('root'));

/**
 * Lembrar que no React, cada element criado precisa ser declarado com letra
 * maiuscula e sua utilização se dá pelo uso do JSX.
 */
