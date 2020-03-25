import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import logoImage from '../../assets/logo.svg';

export default function Register() {
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

                <form>
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="email" placeholder="Email"/>
                    <input type="number" placeholder="Número de WhatsApp"/>
                    <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF"/>
                    </div>

                    <button className="button" type="submit">Cadastrar ONG</button>
                </form>
            </div>
        </div>
    );
}