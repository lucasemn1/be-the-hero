import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash } from 'react-icons/fi';

import './style.css';
import logoImage from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile() {
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data.incidents);
        });
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try{
            await api.delete(`/incidents/delete/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter( incident => incident.id !== id ));
        }
        catch(err) {
            alert('Erro ao deleter o caso.');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <div className="welcome">
                    <img src={logoImage} alt="Logo Be The Hero" />
                    <span>Bem-vinda, {ongName}</span>
                </div>

                <div className="actions">
                    <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link>
                    <button onClick={ handleLogout }> <FiPower /> </button>
                </div>
            </header>

            <main>
                <h1>Casos cadastrados</h1>

                <ul>

                    {incidents.map((value, index) => {
                        return (
                            <li key={value.id}>
                                <strong>CASO:</strong>
                                <p>{value.title}, { value.id }</p>

                                <strong>Descrição</strong>
                                <p>{value.description}</p>

                                <strong>Valor</strong>
                                <p>{Intl.NumberFormat('pt-br', { 
                                    style: 'currency',
                                    currency: 'BRL'
                                 }).format(value.value)}</p>

                                <button onClick={ () => handleDeleteIncident(value.id) }>
                                    <FiTrash />
                                </button>
                            </li>
                        )
                    })}

                </ul>
            </main>
        </div>
    );
}