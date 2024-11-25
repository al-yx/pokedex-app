import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./PokemonCard.css";

const PokemonCard = ({
  poke,
  isFavorite = false,
  levelUp,
  removePokemon,
  setFavoritePokemon,
}) => {
  const markFavorite = useCallback(() => {
    setFavoritePokemon(poke.id);
  }, [setFavoritePokemon, poke]);

  return (
    <div className="pokemonCardContainer">
      <div className="pokemonCard">
        <div
          className={`favouriteIcon ${isFavorite ? "favouriteIconFilled" : ""}`}
          role="button"
          tabindex="0"
          onClick={markFavorite}
        >
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </div>
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
};

export default PokemonCard;
