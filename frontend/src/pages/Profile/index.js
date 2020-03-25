import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash } from 'react-icons/fi';
import './style.css';
import logoImage from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <div className="welcome">
                    <img src={logoImage} alt="Logo Be The Hero"/>
                    <span>Bem-vinda, APAD</span>
                </div>

                <div className="actions">
                    <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link>
                    <button> <FiPower /> </button>
                </div>
            </header>

            <main>
                <h1>Casos cadastrados</h1>

                <ul>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>Descrição</strong>
                        <p>Descrição teste</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>

                        <button>
                            <FiTrash />
                        </button>
                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>Descrição</strong>
                        <p>Descrição teste</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>

                        <button>
                            <FiTrash />
                        </button>
                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>Descrição</strong>
                        <p>Descrição teste</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>

                        <button>
                            <FiTrash />
                        </button>
                    </li>
                </ul>
            </main>
        </div>
    );
}