import React, { useCallback, useState } from "react";
import AddPokemon from "../AddPokemon/AddPokemon";
import PokemonList from "../PokemonList/PokemonList";
import Pokedex from "../../images/Pokedex.png";

import "./PokemonContainer.css";

const PokemonContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [favoritePokemon, setFavoritePokemon] = useState(null);

  const addPokemonToList = useCallback((newPokemon) => {
    setPokemons((prevPokemons) => [...prevPokemons, newPokemon]);
  }, []);

  const levelUp = useCallback((id) => {
    setPokemons((prevPokemons) =>
      prevPokemons.map((poke) =>
        poke.id === id ? { ...poke, level: poke.level + 1 } : poke
      )
    );
  }, []);

  const removePokemon = useCallback(
    (id) => {
      setPokemons(pokemons.filter((poke) => poke.id !== id));
    },
    [pokemons]
  );

  const markFavorite = useCallback(
    (id) => {
      if (favoritePokemon === id) {
        setFavoritePokemon(null);
        return;
      }
      setFavoritePokemon(id);
    },
    [favoritePokemon]
  );

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
