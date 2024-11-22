import axios from "axios";

export const fetchPokemon = async (pokemonName = "", errorCallback) => {
  try {
    if (!pokemonName) return;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return response;
  } catch (error) {
    errorCallback();
  }
};
