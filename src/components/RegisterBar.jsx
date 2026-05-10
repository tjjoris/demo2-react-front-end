import React, { useState } from "react";
import axios from 'axios';


export default function RegisterBar() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    async function handleRegister(e) {
        e.preventDefault();
        try {
            await axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {

                // Now you can make your registration request
                const csrfToken = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('XSRF-TOKEN='))
                    ?.split('=')[1];

                // console.log('CSRF token:', csrfToken);
                alert('CSRF token: ' + csrfToken);
                axios.post('http://localhost:8000/api/register', {
                    name,
                    email,
                    password,
                    password_confirmation: passwordConfirmation
                }).then(response => {
                    console.log('Registration successful:', response.data);
                    // const response = await axios.post('http://localhost:8000/api/register', {
                    //     name, email, password, passwordConfirmation
                });
            }
            ).catch(error => {
                console.error('Registration error:', error);
            })
        }
        catch (error) {
            console.error('Error fetching CSRF token:', error);
        };
    }

    return (
        <>
            <form onSubmit={handleRegister}>
                <label >name</label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                <label >email</label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label >password</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <label >password confirmation</label>
                <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
                <button type="submit" name="submit">Register</button>
            </form>
        </>
    )
}