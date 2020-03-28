import React, { useState } from 'react';

//Para importar estilo é necessário subir dnovo
import './style.css';

//Importando imagens, como não é um component, não precisa ser maiusculo
import heroesImage from '../../assets/heroes.png';
import branchImage from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

// Objeto necessário para ter o comportamento de SPA, que é o de não recarregar todo o conteúdo, e sim só o necessário do virtual
// No comportamento de SPA, ele não recarrega a página, apenas subtitui os elementos da mesma
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

// No React, devemos usar a propriedade class name para colcoar classe nos elementos

export default function Logon() {
  const history = useHistory();
  const [idOng, setIdOng] = useState('');

  async function logOn(event) {
    // Lembrar que o evento sempre é passado como parâmetro
    event.preventDefault();

    let data = {
      id: idOng
    };
    try {
      let response = await api.post('session', data);

      //Dispondo isso na aplicação inteira através da aplicação inteira
      sessionStorage.setItem('idOng', data.id); //Salvando no sessionStorage
      localStorage.setItem('nameOng', response.data.ong.name); // Salvando no LocalStorage

      console.log(`Ong logada: ${response.data.name}`);

      history.push('/profile');
    } catch (error) {
      console.log(error);
      alert('Falha no login');
    }
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={branchImage} alt='imagem de logo' />
        <form onSubmit={logOn}>
          <h1>Faça seu logon</h1>
          <input
            type='text'
            value={idOng}
            onChange={e => setIdOng(e.target.value)}
            placeholder='Sua ID'
          />
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
