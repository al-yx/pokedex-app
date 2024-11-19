import axios from "axios";

export const fetchPokemon = async (pokemonName = "") => {
  try {
    if (!pokemonName) return;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return response;
  } catch (error) {
    alert("Pokémon not found. Please check the name and try again.");
    return {};
  }
};
