import React, { useState } from 'react';
//import api from '../../services/api';

//import './styles-login.css'

const SignUp: React.FC = () => {

    const [name, setName] = useState<HTMLInputElement["value"]>();
    const [email, setEmail] = useState<HTMLInputElement["value"]>();
    const [password, setPassword] = useState<HTMLInputElement["value"]>();



    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        alert(`email: ${email}`);
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
                    type="text"
                    name="password"
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


export default SignUp;
