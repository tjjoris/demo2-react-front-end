import React, { Component } from "react";

class LoginBar extends Component {
    async registerBob() {
        const response = await fetch("http://127.0.0.1:8000/api/register", {
            method: "post",
            body: JSON.stringify({
                name: "Bob",
                email: "bob@example.com",
                password: "pw1234",
                password_confirmation: "pw1234"
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
                <button onClick={() => this.registerBob()}>Register Bob</button>
            </>
        )
    }

}

export default LoginBar;