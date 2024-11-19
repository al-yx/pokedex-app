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
      <div className="headerClass">
        <img src={YourPokemon} alt="heading pokemon" />
      </div>
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
    </div>
  );
};

export default PokemonList;
