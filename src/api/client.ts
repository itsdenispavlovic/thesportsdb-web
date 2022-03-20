import axios from "axios";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const myApp = axios.create({baseURL: BACKEND_URL});
