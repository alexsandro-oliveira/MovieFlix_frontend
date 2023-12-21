import axios from "axios";

export const api = axios.create({
  baseURL: "https://movieflix-api-5fad.onrender.com",
});
