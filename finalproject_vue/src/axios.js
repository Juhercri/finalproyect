import axios from "axios";

export default {
    name: "Axios",
}

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.withCredentials = true
const token = localStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : ''; // En caso de que exista, establece el token de autenticación para que las próximas llamadas se hagan utilizando esta cabezera
