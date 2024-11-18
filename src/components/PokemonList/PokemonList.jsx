import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

const PokemonList = ({
  pokemons,
  favoritePokemon,
  setFavoritePokemon,
  setPokemons,
}) => {
  const levelUp = (id) => {
    setPokemons(
      pokemons.map((poke) =>
        poke.id === id ? { ...poke, level: poke.level + 1 } : poke
      )
    );
  };

  const removePokemon = (id) => {
    setPokemons(pokemons.filter((poke) => poke.id !== id));
  };

  return (
    <div className="pokemon-list">
      <h2 className="title">Added Pokémon</h2>
      {pokemons.map((poke) => (
        <PokemonCard
          key={poke.id}
          pokemon={poke}
          isFavorite={poke.id === favoritePokemon}
          markFavorite={() => setFavoritePokemon(poke.id)}
          levelUp={() => levelUp(poke.id)}
          removePokemon={() => removePokemon(poke.id)}
        />
      ))}
    </div>
  );
};

export default PokemonList;
