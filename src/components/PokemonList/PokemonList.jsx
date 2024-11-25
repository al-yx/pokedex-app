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
  const hasPokemons = pokemons.length > 0;

  return (
    <div className="pokemon-list">
      {hasPokemons && (
        <div className="headerClass">
          <img
            src={YourPokemon}
            alt="heading Pokédex"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
      )}
      <div className="allPokemonContainer">
        {/* Favorite Pokémon */}
        {favoritePokemonData && (
          <div className="favorite-pokemon">
            <PokemonCard
              key={favoritePokemonData.id}
              poke={favoritePokemonData}
              isFavorite
              levelUp={levelUp}
              removePokemon={removePokemon}
              setFavoritePokemon={setFavoritePokemon}
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
              setFavoritePokemon={setFavoritePokemon}
            />
          ))}
      </div>
    </div>
  );
};

export default PokemonList;
