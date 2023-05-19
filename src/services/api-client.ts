import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '10afe40d0f8745c5b36195af6c62769c'
    }
})