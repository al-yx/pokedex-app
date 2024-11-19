import React, { useState } from "react";
import AddPokemon from "../AddPokemon/AddPokemon";
import PokemonList from "../PokemonList/PokemonList";
import "./PokemonContainer.css";
import Pokedex from "../../images/Pokedex.png";

const SAMPLE_DATA = [
  {
    id: 1732028608174,
    originalName: "pikachu",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    level: 1,
  },
  {
    id: 1732028801975,
    originalName: "charizard",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    level: 1,
  },
  {
    id: 1732028809679,
    originalName: "raichu",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/26.png",
    level: 1,
  },
  {
    id: 1732028818610,
    originalName: "zapdos",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/145.png",
    level: 1,
  },
  {
    id: 1732028824708,
    originalName: "suicune",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    level: 1,
  },
  {
    id: 17320288386131732028838613,
    originalName: "mewtwo",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    level: 1,
  },
  {
    id: 17320286081741732028608174,
    originalName: "pikachu",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    level: 1,
  },
  {
    id: 17320288019751732028801975,
    originalName: "charizard",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    level: 1,
  },
  {
    id: 17320288096791732028809679,
    originalName: "raichu",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/26.png",
    level: 1,
  },
  {
    id: 17320288186101732028818610,
    originalName: "zapdos",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/145.png",
    level: 1,
  },
  {
    id: 17320288247081732028824708,
    originalName: "suicune",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    level: 1,
  },
  {
    id: 17320288386131732028838613,
    originalName: "mewtwo",
    nickname: "test",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    level: 1,
  },
];

const PokemonContainer = () => {
  const [pokemons, setPokemons] = useState(SAMPLE_DATA);
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
