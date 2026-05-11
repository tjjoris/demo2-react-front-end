import React, { Component, useContext, useState } from "react";
import axios from 'axios';
import api from "../axiosInstance";
import { useNavigate } from "react-router-dom";

export default function LoginBar({ setLoginStatus }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        try {
            // await axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            await api.get('/sanctum/csrf-cookie').then(response => {
                // alert("axios domain address: " + api.defaults.baseURL);
                // Now you can make your registration request
                const csrfToken = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('XSRF-TOKEN='))
                    ?.split('=')[1];

                // console.log('CSRF token:', csrfToken);
                // alert('CSRF token: ' + csrfToken);
                // axios.post('http://localhost:8000/api/login', {
                api.post('/authenticate', {
                    email,
                    password
                }).then(response => {
                    console.log('Login successful:', response.data);
                    // alert("login data" + JSON.stringify(response.data));
                    //save the login cookie to the browser, so that the user can stay logged in even after refreshing the page.

                    setLoginStatus("logout"); // Switch back to logout status after successful login
                });
            }
            ).catch(error => {
                console.error('Login error:', error);
            })
        }
        catch (error) {
            console.error('Error fetching CSRF token:', error);
        };
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label >email</label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label >password</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" name="submit">Login</button>
            </form>
        </>
    )
}

// class LoginBar extends Component {
//     //set a state to store if on the login page register page, or logout page.
//     //the state should be a react state, so that the component will re-render when the state changes.
//     //todo set a state for the login status and use it to control weather to show a login form, regsiter form, or logout button.
//     // const[loginStatus, setLoginStatus] = useState("login");

//     async handleRegister() {
//         // e.preventDefault();
//         // const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
//         //     method: "post",
//         //     headers: {
//         //         "Content-Type": "application/json",
//         //         "Accept": "application/json",
//         //     },
//         //     body: JSON.stringify({
//         //         name: "Bob",
//         //         email: "bob@example.com",
//         //         password: "pw1234",
//         //         password_confirmation: "pw1234",
//         //     })
//         // });
//         // const data = await response.json();
//         // console.log(data);
//         const payload = { name: 'Bob', email: 'bob@example.com', password: 'pw1234', password_confirmation: 'pw1234' };
//         // await api.post('/api/register', payload);
//         axios.defaults.withCredentials = true;
//         axios.defaults.withXSRFToken = true;

//         // await axios.get('/sanctum/csrf-cookie');

//         // await axios.post('api/')
//         // await api.post('/api/register', payload);
//         // Before your register call:
//         await axios.get('http://localhost:8000/sanctum/csrf-cookie');



//         // Debug the XSRF-TOKEN cookie value
//         const csrfToken = document.cookie
//             .split('; ')
//             .find(row => row.startsWith('XSRF-TOKEN='))
//             ?.split('=')[1];

//         console.log('CSRF token:', csrfToken);

//         let name = "Smith"
//         let email = "smit@examploe.com"
//         let password = "pw1234"
//         let password_confirmation = "pw1234"
//         // Then register:
//         const response = await axios.post('http://localhost:8000/api/register', {
//             name, email, password, password_confirmation
//         });

//         // const response = await fetch('http://127.0.0.1:8000/api/customers', {
//         //     method: "GET",
//         //     headers: {
//         //         "Content-Type": "application/json",
//         //         "Accept": "application/json",


//         //     }
//         // })
//         const data = await response.json();
//         console.log(data);
//     };
//     render() {
//         return (
//             <>
//                 <form>
//                     <div>
//                         <label>email</label>
//                         <input type="email" name="email" />
//                         <label>password</label>
//                         <input type="password" name="password" />
//                         <label>password confirmation</label>
//                         <input type="password" name="password_confirmation" />
//                         <button type="button" name="submit">Login</button>
//                     </div>
//                 </form>
//                 <button onClick={() => this.doRegister()}>Register</button>
//                 <button onClick={() => this.handleRegister()}>Register Bob</button>
//             </>
//         )
//     }

// }

// export default LoginBar;