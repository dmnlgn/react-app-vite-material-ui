import axios from "axios";

export const fetchCategories = async (callback) => {
  return await axios({
    method: "GET",
    url: "https://api.chucknorris.io/jokes/categories",
  })
    .then((response) => callback(response.data))
    .catch((err) => console.log(err));
};

export const fetchRandomJoke = async (category, callback) => {
  return await axios({
    method: "GET",
    url: `https://api.chucknorris.io/jokes/random?category=${category}`,
  })
    .then((response) => {
      callback(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
};
