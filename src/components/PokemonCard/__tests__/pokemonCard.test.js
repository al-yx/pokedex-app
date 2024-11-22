import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import PokemonCard from "../PokemonCard";

describe("PokemonCard component", () => {
  const poke = {
    id: 1,
    sprite: "https://example.com/pokemon-sprite.png",
    nickname: "Pikachu",
    originalName: "Pikachu",
    level: 1,
  };

  const levelUp = jest.fn();
  const removePokemon = jest.fn();

  it("renders with default props", () => {
    render(<PokemonCard poke={poke} />);
    expect(screen.getByText("Level Up")).toBeInTheDocument();
    expect(screen.getByText("Remove")).toBeInTheDocument();
  });

  it("clicking level up button calls levelUp function", async () => {
    render(<PokemonCard poke={poke} levelUp={levelUp} />);
    const levelUpButton = screen.getByText("Level Up");
    fireEvent.click(levelUpButton);
    await waitFor(() => expect(levelUp).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(levelUp).toHaveBeenCalledWith(poke.id));
  });

  it("clicking remove button calls removePokemon function", async () => {
    render(<PokemonCard poke={poke} removePokemon={removePokemon} />);
    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);
    await waitFor(() => expect(removePokemon).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(removePokemon).toHaveBeenCalledWith(poke.id));
  });
});
