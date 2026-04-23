import React, { Component } from "react";

class LoginBar extends Component {

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
            </>
        )
    }

}

export default LoginBar;