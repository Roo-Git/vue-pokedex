import axios from "axios";

const URL_API = "https://pokeapi.co/api/v2";

export const getPokemon = () => {
  return axios.get(`${URL_API}/pokemon?limit=20&offset=0`);
};

export const getPokemonByName = (pokemonName) => {
  return axios.get(`${URL_API}/pokemon/${pokemonName}`);
};
