import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({
  poke,
  isFavorite = false,
  levelUp,
  removePokemon,
  markFavorite,
}) => {
  return (
    <div className="pokemonCardContainer">
      <div className="pokemonCard">
        <img className="pokemonImage" src={poke.sprite} alt={poke.nickname} />
        <div className="pokemonLevel">
          {String(poke.level).padStart(3, "0")}
        </div>
        <div className="pokemonName">{poke.originalName}</div>
        <div className="pokemonNickname">{poke.nickname}</div>
        <div>
          <button
            className="button levelUpButton"
            onClick={() => levelUp(poke.id)}
          >
            Level Up
          </button>
          <button
            className="button removeButton"
            onClick={() => removePokemon(poke.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div
      className={`pokemon-card ${isFavorite ? "favorite" : ""}`}
      style={{ marginBottom: "20px" }}
    >
      <img src={poke.sprite} alt={poke.nickname} style={{ width: "100px" }} />
      <p>Original Name: {poke.originalName}</p>
      <p>Nickname: {poke.nickname}</p>
      <p>Level: {poke.level}</p>
      <div className="buttons">
        <button onClick={() => levelUp(poke.id)}>Level Up</button>
        <button onClick={() => removePokemon(poke.id)}>Remove</button>
        {markFavorite && (
          <button onClick={markFavorite}>Mark as Favorite</button>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
