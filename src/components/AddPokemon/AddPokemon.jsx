import React, { useState } from "react";
import { fetchPokemon } from "./addPokemon.actions";
import "./AddPokemon.css";

const AddPokemon = ({ onAddPokemon }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [nickname, setNickname] = useState("");
  const [selectedSprite, setSelectedSprite] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

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
      // console.log("pokemon added");
      setShowPopup(true);
      // console.log("popup will show now", showPopup);
      setTimeout(() => setShowPopup(false), 2000);
      resetForm();
    } else {
      // alert("Please select a sprite and provide a nickname.");
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
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
      {showWarning && (
        <div className="popup warning">
          Please select a sprite and provide a nickname!
        </div>
      )}
      {pokemonData ? (
        <div>
          <div className="pokemon-info">
            <div className="sprites-container">
              {Object.values(pokemonData.sprites)
                .filter((sprite) => sprite && typeof sprite === "string")
                .map((sprite, index) => (
                  <div className="sprite-wrapper" key={index}>
                    <img
                      src={sprite}
                      alt="pokemon sprite"
                      onClick={() => setSelectedSprite(sprite)}
                      className={`sprite ${
                        sprite === selectedSprite ? "selected" : ""
                      }`}
                    />
                  </div>
                ))}
            </div>
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
      ) : (
        <div className="form">
          <input
            type="text"
            placeholder="Enter Pokémon name"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            className="input"
          />
          <button onClick={onButtonClick} className="fetch-button">
            <img
              src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_magnifying_glass.png"
              alt="Search"
              className="search-icon"
            />
          </button>
        </div>
      )}
      {showPopup && <div className="popup">Pokémon has been added!</div>}
    </div>
  );
};

export default AddPokemon;
