import React, { useState } from 'react';
import api from '../../services/api';

//import './styles-login.css'

export default function SignUp({ history }) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();



    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/signup', { email, password })
            .then(response => {
                if (response.status === 200) {
                    alert("Cadastro concluído!")
                    history.push("/home");
                }
            })
            .catch(error => {
                if (error.response.status === 400) {
                    alert("Usuário já cadastrado!");
                }
                if (error.response.status === 500) {
                    alert("Something went wrong!");
                }
            });
    }



    return (
        <div id="signup">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nome completo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    required
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
