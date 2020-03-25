import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css';
import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

import api from '../../services/api';

export default function Logon() {
    const [ id, setId ] = useState('');
    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', response.data.ong.id);
            localStorage.setItem('ongName', response.data.ong.name);

            history.push('/profile');
        }
        catch(err) {
            alert('ONG não cadastrada!');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Logo Be The Hero"/>

                <form onSubmit={ event => handleLogin(event) }>
                    <h1>Faça seu login</h1>

                    <input 
                        type="text" 
                        placeholder="Preencha com sua ID"
                        onChange={ (event) => setId(event.target.value) }
                    />
                    <button type="submit" className="button"> Entrar </button>

                    <Link to="/register" className="link">
                        <FiLogIn className="login-icon"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt="Juntos somos heróis!"/>
        </div>
    );
}