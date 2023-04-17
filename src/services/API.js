import axios from "axios";

const instance = axios.create({
  baseURL: "https://livraria-api-v2.onrender.com", 
});

export const getBooks = async () => {
  const response = await instance.get("/livros");
  const json = await response.data;
  return json;
};

export const getBookById = async (id) => {
  const response = await instance.get(`/livros/${id}`);
  const json = await response.data;
  return json;
};

export const addBook = async (body) => {
  const response = await instance.post('/livros', body)
  const json = await response.data.msg;
  return json;
};

export const removeBook = async (id) => {
  const response = await instance.delete(`/livros/${id}`);
};

export const updateBook = async (id, body) => {
  const response = await instance.put(`/livros/${id}`, body)
};