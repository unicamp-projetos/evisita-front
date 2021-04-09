import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import api from '../../services/api';

import './styles-login.css'

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    function handleSubmit(event) {
        event.preventDefault();

        alert(`email: ${email}`);
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
                    type="text"
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


export default Login;
