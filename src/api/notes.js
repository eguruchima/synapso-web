import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export const getAllNotes = () => axios.get("/notes.json").then((r) => r.data);
export const createNote = (params) => axios.post("/notes.json", params).then((r) => r.data);
export const getNote = (id) => axios.get(`/notes/${id}.json`).then((r) => r.data);
export const updateNote = (id, params) => axios.patch(`/notes/${id}.json`, params).then((r) => r.data);

export const destroyNote = (id) => axios.delete(`/notes/${id}.json`);
