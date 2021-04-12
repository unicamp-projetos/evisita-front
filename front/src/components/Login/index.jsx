import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles-login.css'

export default function Login({ history }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/signin', { email, password })
            .then(response => {
                if (response.status === 200) {
                    history.push("/home");
                }
            })
            .catch(error => {
                if (error.response.status === 400) {
                    alert("Usuário ou senha inválidos!");
                }
                if (error.response.status === 500) {
                    alert("Something went wrong!");
                }
            });
    }



    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    required
                    placeholder="Seu email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/SignUp">Cadastre-se</Link>
        </div>
    );
}
