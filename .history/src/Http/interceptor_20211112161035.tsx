import axios from "axios";

axios.interceptors.request.use((req) => {
    console.log(req);
})