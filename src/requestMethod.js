import axios from "axios";

// const BASE_URL = "https://adminobj.herokuapp.com/api";
const BASE_URL2 = "https://objadminapi.herokuapp.com/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL2,
});
