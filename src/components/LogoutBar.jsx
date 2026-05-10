import axios from "axios"
import api from "../axiosInstance";
import { useState, useEffect } from "react"

export default function LogoutBar({ setLoginStatus }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const res = await api.get("/api/user");
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
        Logged in as {user.name}</>;
}