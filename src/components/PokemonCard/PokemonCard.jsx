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
