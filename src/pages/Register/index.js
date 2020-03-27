import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import branchImage from '../../assets/logo.svg';

export default function Register() {
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
        <form>
          <input type='text' name='' id='' placeholder='Nome ong' />
          <input type='text' name='' id='' placeholder='Whatsapp' />
          <input type='email' name='' id='' placeholder='E-mail' />
          <div className='input-group'>
            <input type='text' name='' id='' placeholder='Cidade' />
            <input
              type='text'
              name=''
              id=''
              placeholder='UF'
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
