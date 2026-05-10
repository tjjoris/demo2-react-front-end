import axios from "axios"
export default function LogoutBar({ setLoginStatus }) {
    return (<>
        loggged in as {axios.get('http://localhost:8000/api/user').then(response => {
            console.log('User data:', response.data);
            return response.data.name; // Assuming the user data has a 'name' property
        })}
    </>)
}