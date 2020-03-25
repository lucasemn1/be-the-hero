import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Logo Be The Hero"/>

                <form>
                    <h1>Faça seu login</h1>

                    <input type="text" placeholder="Preencha com sua ID"/>
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