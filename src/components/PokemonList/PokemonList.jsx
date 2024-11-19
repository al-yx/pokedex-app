import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";
import YourPokemon from "../../images/YourPokemon.png";

const PokemonList = ({
  pokemons,
  favoritePokemon,
  setFavoritePokemon,
  levelUp,
  removePokemon,
}) => {
  const favoritePokemonData = pokemons.find(
    (poke) => poke.id === favoritePokemon
  );

  return (
    <div className="pokemon-list">
      <img src={YourPokemon} alt="heading pokemon" />

      {/* Favorite Pokémon */}
      {favoritePokemonData && (
        <div
          className="favorite-pokemon"
          style={{
            backgroundColor: "gold",
            padding: "10px",
            marginBottom: "20px",
            border: "2px solid black",
          }}
        >
          <strong>Favorited Pokémon</strong>
          <PokemonCard
            key={favoritePokemonData.id}
            poke={favoritePokemonData}
            isFavorite
            levelUp={levelUp}
            removePokemon={removePokemon}
          />
        </div>
      )}

      {/* Non-favorite Pokémon */}
      {pokemons
        .filter((poke) => poke.id !== favoritePokemon)
        .map((poke) => (
          <PokemonCard
            key={poke.id}
            poke={poke}
            levelUp={levelUp}
            removePokemon={removePokemon}
            markFavorite={() => setFavoritePokemon(poke.id)}
          />
        ))}
    </div>
  );
};

export default PokemonList;
