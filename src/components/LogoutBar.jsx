import axios from "axios"
import api from "../axiosInstance";
import { useState, useEffect } from "react"

export default function LogoutBar({ setLoginStatus }) {
    const [user, setUser] = useState(null);

    async function handleLogout() {
        try {
            await api.post('/logout').then(response => {
                if (response.data.message === "Logout successful") {
                    setLoginStatus("login"); // Switch back to register status after successful logout
                }
            })
        }
        catch (error) {
            console.error("logout failed", error);
        }
    }

    //use effect to fetch user data so i can see it.
    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const res = await api.get("/api/user");
                // alert("user data: " + JSON.stringify(res.data));
                if (mounted) setUser(res.data);
            } catch (err) {
                console.error("fetch user failed", err.response?.status, err.response?.data);
            }
        })();
        return () => { mounted = false; };
    }, []);

    if (!user) return <>
        Loading...</>;
    return <>
        Logged in as {user.name}
        <button onClick={handleLogout}>Logout</button>
    </>;
}