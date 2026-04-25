import React, { Component, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

class LoginBar extends Component {
    async handleRegister() {
        // e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: "Bob",
                email: "bob@example.com",
                password: "pw1234",
                password_confirmation: "pw1234",
            })
        });
        const data = await response.json();
        console.log(data);
    };
    render() {
        return (
            <>
                <form>
                    <div>
                        <label>email</label>
                        <input type="email" name="email" />
                        <label>password</label>
                        <input type="password" name="password" />
                        <button type="button" name="submit">Login</button>
                    </div>

                </form>
                <button onClick={() => this.handleRegister()}>Register Bob</button>
            </>
        )
    }

}

export default LoginBar;