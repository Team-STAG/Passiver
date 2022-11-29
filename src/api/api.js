import axios from "axios"
import { textUrl } from "./urls";




const api = axios.create({
    baseURL: textUrl,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("user_token")}`
    }
});

export default api;