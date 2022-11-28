import axios from "axios"
import { textUrl } from "./urls";


const getToken = () => {

    var token = "";

    if(localStorage.getItem("user_token")){

        token = localStorage.getItem("user_token");

    }

    return token;
}

const api = axios.create({
    baseURL: textUrl,
    headers: {
        "Authorization": `Bearer ${getToken()}`
    }
});

export default api;