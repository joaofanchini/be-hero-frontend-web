import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import branchImage from '../../assets/logo.svg';
import './style.css';

export default function NewIncident() {
  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={branchImage} alt='Logo image' />
          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um héroi para resolver
            isso
          </p>
          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#E02041' /> Voltar
          </Link>
        </section>
        <form>
          <input type='text' name='' id='' placeholder='Título do caso' />
          <textarea placeholder='Descrição' />
          <input type='email' name='' id='' placeholder='Valor em reais' />
          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
