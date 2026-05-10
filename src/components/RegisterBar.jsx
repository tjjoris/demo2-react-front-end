import React from "react";

function handleRegister() {
    alert("register");
}
export default function RegisterBar() {
    return (
        <>
            <form >
                <label >name</label>
                <input type="text" name="name" />
                <label >email</label>
                <input type="email" name="email" />
                <label >password</label>
                <input type="password" name="password" />
                <label >password confirmation</label>
                <input type="password" name="password_confirmation" />
                <button type="button" name="submit" onClick={handleRegister}>Register</button>
            </form>
        </>
    )
}