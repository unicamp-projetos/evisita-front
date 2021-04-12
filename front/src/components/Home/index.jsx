import React, { useState, useEffect } from 'react';
import api from '../../services/api';

// import './styles-login.css'

export default function Home({ history }) {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function loadPatients() {
            const response = await api.get('/patients');

            console.log(response);

            setPatients(response.data.patients);
        }

        loadPatients()
    }, []);

    return (
        <div>
            <h2>Pacientes</h2>
            <ul className="main-list">
                {patients.map(patient => (
                    <li key={patient}>
                        <strong>{patient}</strong>
                        <button className="book">Escolher</button> {/*onClick={handleBook}*/}
                    </li>
                ))}
            </ul>
        </div>
    );
}
