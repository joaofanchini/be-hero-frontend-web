import React from 'react';

//Para importar estilo é necessário subir dnovo
import './style.css';

//Importando imagens, como não é um component, não precisa ser maiusculo
import heroesImage from '../../assets/heroes.png';
import branchImage from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

// Objeto necessário para ter o comportamento de SPA, que é o de não recarregar todo o conteúdo, e sim só o necessário do virtual
// No comportamento de SPA, ele não recarrega a página, apenas subtitui os elementos da mesma
import { Link } from 'react-router-dom';

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

          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='#E02041' /> Registrar
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt='Heroes' />
    </div>
  );
}

// O nome do arquivo é index.js pois por padrão, o React dentro de uma pasta sempre irá
// tentar pegar o index, caso n seja definido como index, basta coloca /{nome do arquivo}
