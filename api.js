import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getToken = () => localStorage.getItem("adminToken");

export const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
});