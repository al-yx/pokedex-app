import React, { useState } from "react";
import axios from "axios";
import PokemonList from "../PokemonList/PokemonList";
import "./AddPokemon.css";

const AddPokemon = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [nickname, setNickname] = useState("");
  const [selectedSprite, setSelectedSprite] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [favoritePokemon, setFavoritePokemon] = useState(null);

  const fetchPokemon = async () => {
    try {
      if (!pokemonName) return;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      setPokemonData(response?.data);
    } catch (error) {
      alert("Pokémon not found. Please check the name and try again.");
    }
  };

  const addPokemon = () => {
    if (nickname && selectedSprite) {
      const newPokemon = {
        id: Date.now(),
        originalName: pokemonData.name,
        nickname,
        sprite: selectedSprite,
        level: 1,
      };
      setPokemons([...pokemons, newPokemon]);
      resetForm();
    } else {
      alert("Please select a sprite and provide a nickname.");
    }
  };

  const resetForm = () => {
    setPokemonName("");
    setPokemonData(null);
    setNickname("");
    setSelectedSprite("");
  };

  return (
    <div className="add-pokemon-container">
      <h1 className="title">Pokédex</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Enter Pokémon name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="input"
        />
        <button onClick={fetchPokemon} className="fetch-button">
          Fetch Pokémon
        </button>
      </div>

      {pokemonData && (
        <div className="pokemon-info">
          <h2>Available Sprites</h2>
          <div className="sprites-container">
            {Object.values(pokemonData.sprites)
              .filter((sprite) => sprite)
              .map((sprite, index) => (
                <img
                  key={index}
                  src={sprite}
                  alt="pokemon sprite"
                  onClick={() => setSelectedSprite(sprite)}
                  className={`sprite ${
                    sprite === selectedSprite ? "selected" : ""
                  }`}
                />
              ))}
          </div>
          <div className="nickname-container">
            <input
              type="text"
              placeholder="Enter Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="input"
            />
            <button onClick={addPokemon} className="add-button">
              Add Pokémon
            </button>
          </div>
        </div>
      )}

      <PokemonList
        pokemons={pokemons}
        favoritePokemon={favoritePokemon}
        setFavoritePokemon={setFavoritePokemon}
        setPokemons={setPokemons}
      />
    </div>
  );
};

export default AddPokemon;
