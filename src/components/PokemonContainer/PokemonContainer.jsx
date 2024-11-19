import React, { useState } from "react";
import AddPokemon from "../AddPokemon/AddPokemon";
import PokemonList from "../PokemonList/PokemonList";
import "./PokemonContainer.css";
import Pokedex from "../../images/Pokedex.png";

const PokemonContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [favoritePokemon, setFavoritePokemon] = useState(null);

  const addPokemonToList = (newPokemon) => {
    setPokemons((prevPokemons) => [...prevPokemons, newPokemon]);
  };

  const levelUp = (id) => {
    setPokemons((prevPokemons) =>
      prevPokemons.map((poke) =>
        poke.id === id ? { ...poke, level: poke.level + 1 } : poke
      )
    );
  };

  const markFavorite = (id) => {
    setFavoritePokemon(id);
  };

  const removePokemon = (id) => {
    setPokemons(pokemons.filter((poke) => poke.id !== id));
  };

  return (
    <div className="parent-container">
      <img src={Pokedex} alt="header" className="image-conatiner" />
      <AddPokemon onAddPokemon={addPokemonToList} />
      <PokemonList
        pokemons={pokemons}
        favoritePokemon={favoritePokemon}
        setFavoritePokemon={markFavorite}
        levelUp={levelUp}
        removePokemon={removePokemon}
      />
    </div>
  );
};

export default PokemonContainer;
