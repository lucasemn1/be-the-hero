import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import './style.css';

import api from '../../services/api';

export default function NewIncident() {
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);

    async function handleCreateIncident(event) {
        event.preventDefault();

        try{
            await api.post('incidents/new', 
                { title, description, value }, 
                { headers: { Authorization: ongId } }
            );

            alert('Caso cadastrado!');
            history.push('/profile')
        }
        catch(err) {
            alert('Erro ao cadastrar o caso!');
        }
    }

    return (
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Logo Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para que um herói possa resolver isso.</p>
                
                    <Link to="/profile" className="link">
                        <FiArrowLeft />
                        Voltar para os casos
                    </Link>
                </section>

                <form onSubmit={ handleCreateIncident }>
                    <input 
                        type="text" 
                        placeholder="Título do caso"
                        value={title}
                        onChange={ (event) => setTitle(event.target.value) }
                    />
                    <input 
                        type="number" 
                        placeholder="Valor em R$"
                        value={value}
                        onChange={ (event) => setValue(event.target.value) }
                    />
                    <textarea 
                        placeholder="Descreva o caso"
                        value={description}
                        onChange={ (event) => setDescription(event.target.value) }
                    ></textarea>

                    <button className="button" type="submit">Cadastrar caso</button>
                </form>
            </div>
        </div>
    );
}