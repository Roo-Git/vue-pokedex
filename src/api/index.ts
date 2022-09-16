import axios from "axios";
import type { Pokemon } from "../types";

const URL_API = "https://pokeapi.co/api/v2";

type GetPokemonsResponse = { data: { results: Pokemon[] } };

export const getPokemons = (): Promise<GetPokemonsResponse> => {
  return axios.get(`${URL_API}/pokemon?limit=151&offset=0`);
};

type GetPokemonByNameResponse = {
  data: Pokemon;
};

export const getPokemonByName = (
  pokemonName: string
): Promise<GetPokemonByNameResponse> => {
  return axios.get(`${URL_API}/pokemon/${pokemonName}`);
};
