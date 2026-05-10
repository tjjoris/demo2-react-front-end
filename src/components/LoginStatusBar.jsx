import React, { useState } from "react";
import RegisterBar from "./RegisterBar";
import LoginBar from "./LoginBar";

export default function LoginStatusBar() {
    //state for showing a login form, register form, or logout button.
    const [loginStatus, setLoginStatus] = useState("login");
    let content = null;

    // swtich(loginStatus) {
    //     case 'login': content =
    //         <button onClick={() => { setLoginStatus("register") }}>Register</button>;
    //     break;
    // };
    if (loginStatus === "login") {
        content = <>
            <LoginBar setLoginStatus={setLoginStatus} />
            <button onClick={() => { setLoginStatus("register") }}>Register</button>
        </>
    }

    if (loginStatus === "register") {
        content = <>
            hello world
            <RegisterBar setLoginStatus={setLoginStatus} />
            <button onClick={() => { setLoginStatus("login") }}>Login</button>
        </>
    }

    if (loginStatus === "logout") {
        content = <>
            logout
        </>
    }

    return (<>
        {content}
    </>
    )
}