import axios from "axios";

const instance = axios.create({
  baseURL: "https://bookstore-mod4-v2.herokuapp.com",
});

export const getBooks = async () => {
  const response = await instance.get("/livros");
  const json = await response.data;
  return json;
};

export const getBooksBy = async (categoria) => {

};

export const postProduto = async (body) => {

};

export const deleteProduto = async (id) => {

};

export const editaProduto = async (id, body) => {

};