import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImage from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register() {
    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsappNumber, setWhatsappNumber ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');


    async function handleRegister(event) {
        event.preventDefault();
        const data = { name, email, whatsapp_number: whatsappNumber, city, uf };

        try {
            const response = await api.post('/ongs/new', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }
        catch(err) {
            alert('Erro ao realizar o cadastro');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Logo Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                    <Link to="/" className="link">
                        <FiArrowLeft />
                        Voltar para o logon
                    </Link>
                </section>

                <form onSubmit={ event => handleRegister(event) }>
                    <input
                        type="text" 
                        placeholder="Nome da ONG" 
                        value={name} 
                        onChange={ event => setName(event.target.value) }
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={ event => setEmail(event.target.value) }
                    />
                    <input 
                        type="number" 
                        placeholder="Número de WhatsApp" 
                        value={whatsappNumber} 
                        onChange={ event => setWhatsappNumber(event.target.value) }
                    />
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Cidade" 
                            value={city} 
                            onChange={ event => setCity(event.target.value) }
                        />
                        <input 
                            type="text" 
                            placeholder="UF" 
                            value={uf} 
                            onChange={ event => setUf(event.target.value) }
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar ONG</button>
                </form>
            </div>
        </div>
    );
}