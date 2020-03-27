import React, { Profiler } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import branchImage from '../../assets/logo.svg';

import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
  return (
    <div className='profile-container'>
      <header>
        <img src={branchImage} alt='Logo image' />
        <span>Bem vindo ONG</span>

        <Link className='button' to='/incidentes/new'>
          Cadastrar novo caso
        </Link>

        <button type='button'>
          <FiPower size={18} color='#E02041' />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>descrição teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type='button'>
            <FiTrash2 size={18} color='#a8a8b3' />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>descrição teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type='button'>
            <FiTrash2 size={18} color='#a8a8b3' />
          </button>
        </li>
      </ul>
    </div>
  );
}
