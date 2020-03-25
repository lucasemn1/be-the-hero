import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';
import './style.css';

export default function NewIncident() {
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

                <form>
                    <input type="text" placeholder="Título do caso"/>
                    <input type="number" placeholder="Valor em R$"/>
                    <textarea placeholder="Descreva o caso">

                    </textarea>

                    <button className="button" type="submit">Cadastrar caso</button>
                </form>
            </div>
        </div>
    );
}