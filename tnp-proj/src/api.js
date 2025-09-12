// src/api.js
import axios from "axios";

const API_BASE = "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// default export (so imports like `import API_BASE from './api'` still work)
export default API_BASE;

// named exports (recommended to use these in components)
export const getMembers = () => api.get("/members");
export const createMember = (memberData) => api.post("/members", memberData);
export const updateMember = (id, data) => api.put(`/members/${id}`, data);
export const deleteMember = (id) => api.delete(`/members/${id}`);

// You can add other entity helpers similarly
export const getFamilies = () => api.get("/families");
export const createFamily = (data) => api.post("/families", data);
