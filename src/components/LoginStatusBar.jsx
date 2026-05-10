import React, { useState } from "react";
import RegisterBar from "./RegisterBar";

export default function LoginStatusBar() {
    //state for showing a login form, register form, or logout button.
    const [loginStatus, setLoginStatus] = useState("login");

    return (<>
        You are: {loginStatus}
        {loginStatus === "register" && <RegisterBar />}
        <button onClick={() => { setLoginStatus("login") }}>Login</button>
        <button onClick={() => { setLoginStatus("register") }}>Register</button>
        <button onClick={() => { setLoginStatus("logout") }}>Logout</button>
    </>
    )
}