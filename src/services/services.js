import axios from "axios";

const getAll = () => {
  return axios
    .get(`https://dog.ceo/api/breeds/list/all`)
};

const getRandomDog = () => {
  return axios
    .get(`https://dog.ceo/api/breeds/image/random`)
};

const getBreedByName = (requestParam) => {
  return axios
    .get(`https://dog.ceo/api/breed/${requestParam}/images`)
};

export { getAll, getBreedByName, getRandomDog };
