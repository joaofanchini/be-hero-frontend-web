import React, { useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import branchImage from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register() {
  // O useHistory permite a navegação entre páginas javascript, sem o meio de um link
  const history = useHistory();

  // Função responsável por chamar a api (Esse evento é o evento padrão que é recebido)
  // Para armazenar os retornos, o mais fácil é armazenar as variável em um estado
  const [name, setName] = useState(''); // Lembrar que isso retorna um array onde a primeira posiao é o valor da variável guardada e a segunda é o metodo do encapsulamento
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function makeRegister(event) {
    event.preventDefault(); //Responsável por retirar configurações padrão do evento
    // Lembrar que o evento submit recarrega a página por padrão

    let data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    // Fazendo chamada para API através do client http

    // Modo de fazer chamadas através de callbacks
    // api
    //   .post('ongs', data)
    //   .then(response => {
    //     console.log(response);
    //     alert(`Seu Id de acesso: ${response.data.id}`); // O retorno fica dentro do data, no objeto response
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    //Modo de fazer chamada através do async/await

    let response = await api.post('ongs', data);

    if (response.status === 200) {
      console.log(response);
      alert(`Seu Id de acesso: ${response.data.id}`); // O retorno fica dentro do data, no objeto response

      history.push('/');
    } else {
      console.log(response);
    }
  }

  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={branchImage} alt='Logo image' />
          <h1>Cadastro</h1>
          <p>
            Faça o seu cadastro, entre na plataforma e ajuda pessoas a
            econtrarem os casos da sua ONG.
          </p>
          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041' /> Registrar
          </Link>
        </section>
        <form onSubmit={makeRegister}>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Nome ong'
          />
          <input
            type='text'
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder='Whatsapp'
          />
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='E-mail'
          />
          <div className='input-group'>
            <input
              type='text'
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder='Cidade'
            />
            <input
              type='text'
              placeholder='UF'
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>
          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
