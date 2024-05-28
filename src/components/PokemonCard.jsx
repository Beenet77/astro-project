import React from "react";

const PokemonCard = ({ pokemon }) => (
  <div className="max-w-xs bg-white rounded overflow-hidden shadow-lg my-2">
    <img className="w-full" src={pokemon.image} alt={pokemon.name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 capitalize">{pokemon.name}</div>
      <p className="text-gray-700 text-base">Type: {pokemon.type.join(", ")}</p>
    </div>
  </div>
);

export default PokemonCard;
