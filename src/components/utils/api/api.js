
// todos los usuarios

import axios from "axios";

export const getUsers = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

// un usuario
export const getUsersById = async (id) => {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.data;
};

