import axios from "https://cdn.bootcss.com/axios/0.19.0/axios.js"

export function request_Login() {
     return axios.get("/login")
}