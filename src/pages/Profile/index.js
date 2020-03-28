import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import branchImage from '../../assets/logo.svg';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

export default function Profile() {
  const history = useHistory();

  const nameOng = localStorage.getItem('nameOng');
  const idOng = sessionStorage.getItem('idOng');

  const [incident, setIncident] = useState([]); //Aqui meu setState começa com uma lista

  useEffect(() => {
    // use Effects nada mais executa uma função ao recarregar a tela, além de recarregar a função para cada mudança na variável indicada
    api
      .get('/profile', {
        headers: {
          Authorization: idOng
        }
      })
      .then(response => {
        setIncident(response.data);
      })
      .catch(error => {
        console.log(error);
        alert('Erro ao efetuar consulta de perfis');
      });
  }, [idOng]);

  /**
   * Sempre que for retornar uma JSX, é necessário abrir os () e colocar o return,
   * mesmo que seja dentro de uma outra JSX.
   *
   * Lembrar também que sempre que quisermos colocar uma função javascript no meio do
   * código, é necessário abrir {}
   *
   * PS: Colocar como return () de uma função, já implica que em 'return ();'
   *
   * PS: Com React, sempre que for fazer uma listagem, é necessário adicionar o identificador
   * único à aquela linha (li), e com React, fazemos isso através do atributo 'key'
   */

  function logout() {
    localStorage.clear();
    sessionStorage.clear();
    history.push('/');
  }

  function deleteIncident(event, incidentId) {
    event.preventDefault();
    console.log(incidentId);
    api
      .delete(`/incident/${incidentId}`, {
        headers: {
          Authorization: idOng
        }
      })
      .then(response => {
        console.log(response);
        alert(`Caso (${incidentId}) deletado`);
        setIncident(incident.filter(i => i.id !== incidentId));
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className='profile-container'>
      <header>
        <img src={branchImage} alt='Logo' />
        <span>Bem vindo, {nameOng}</span>

        <Link className='button' to='/new-incident'>
          Cadastrar novo caso
        </Link>

        <button type='button'>
          <FiPower size={18} color='#E02041' onClick={logout} />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incident.map(i => (
          <li key={i.id}>
            <strong>Caso:</strong>
            <p>{i.title}</p>

            <strong>Descrição:</strong>
            <p>{i.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat('pt-Br', {
                style: 'currency',
                currency: 'BRL'
              }).format(i.value)}
            </p>

            <button type='button'>
              <FiTrash2
                size={18}
                color='#a8a8b3'
                onClick={event => deleteIncident(event, i.id)}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
