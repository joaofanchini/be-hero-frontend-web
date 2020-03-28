import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import branchImage from '../../assets/logo.svg';
import './style.css';

import api from '../../services/api';

export default function NewIncident() {
  const idOng = sessionStorage.getItem('idOng');
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  function createIncident(event) {
    event.preventDefault();
    let data = {
      title,
      value,
      description
    };

    api
      .post('incident', data, {
        headers: {
          Authorization: idOng
        }
      })
      .then(response => {
        console.log(response);
        alert('Caso cadastrado com sucesso');
        history.push('/profile');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={branchImage} alt='Logo' />
          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um héroi para resolver
            isso
          </p>
          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#E02041' /> Voltar
          </Link>
        </section>
        <form onSubmit={createIncident}>
          <input
            type='text'
            onChange={event => setTitle(event.target.value)}
            placeholder='Título do caso'
          />
          <textarea
            onChange={event => setDescription(event.target.value)}
            placeholder='Descrição'
          />
          <input
            type='text'
            onChange={event => setValue(event.target.value)}
            placeholder='Valor em reais'
          />
          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
