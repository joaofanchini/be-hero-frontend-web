import React from 'react';

//Para importar estilo é necessário subir dnovo
import './style.css';

//Importando imagens, como não é um component, não precisa ser maiusculo
import heroesImage from '../../assets/heroes.png';
import branchImage from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

// No React, devemos usar a propriedade class name para colcoar classe nos elementos

export default function Logon() {
  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={branchImage} alt='imagem de logo' />
        <form>
          <h1>Faça seu logon</h1>
          <input type='text' placeholder='Sua ID' />
          <button className='button' type='submit'>
            Entrar
          </button>

          <a href='/register'>
            <FiLogIn size={16} color='#E02041' /> Registrar
          </a>
        </form>
      </section>

      <img src={heroesImage} alt='Heroes' />
    </div>
  );
}

// O nome do arquivo é index.js pois por padrão, o React dentro de uma pasta sempre irá
// tentar pegar o index, caso n seja definido como index, basta coloca /{nome do arquivo}
