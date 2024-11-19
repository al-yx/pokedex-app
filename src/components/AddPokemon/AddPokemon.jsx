import React, { useState } from "react";
import { fetchPokemon } from "./addPokemon.actions";
import "./AddPokemon.css";

const AddPokemon = ({ onAddPokemon }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [nickname, setNickname] = useState("");
  const [selectedSprite, setSelectedSprite] = useState("");

  const addPokemon = () => {
    if (nickname && selectedSprite) {
      const newPokemon = {
        id: Date.now(),
        originalName: pokemonData.name,
        nickname,
        sprite: selectedSprite,
        level: 1,
      };
      onAddPokemon(newPokemon);
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

  const onButtonClick = async () => {
    const response = await fetchPokemon(pokemonName.toLowerCase());
    setPokemonData(response?.data);
  };

  return (
    <div className="add-pokemon-container">
      <div className="form">
        <input
          type="text"
          placeholder="Enter Pokémon name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="input"
        />
        <button onClick={onButtonClick} className="fetch-button">
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
    </div>
  );
};

export default AddPokemon;
