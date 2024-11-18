import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({
  pokemon,
  isFavorite,
  markFavorite,
  levelUp,
  removePokemon,
}) => (
  <div className={`pokemon-card ${isFavorite ? "favorite" : ""}`}>
    <img src={pokemon.sprite} alt="pokemon" className="pokemon-image" />
    <div className="pokemon-details">
      <p>Original Name: {pokemon.originalName}</p>
      <p>Nickname: {pokemon.nickname}</p>
      <p>Level: {pokemon.level}</p>
    </div>
    <div className="pokemon-actions">
      <button onClick={levelUp} className="action-button">
        Level Up
      </button>
      <button onClick={removePokemon} className="action-button">
        Remove
      </button>
      {!isFavorite && (
        <button onClick={markFavorite} className="action-button">
          Mark as Favorite
        </button>
      )}
    </div>
  </div>
);

export default PokemonCard;
