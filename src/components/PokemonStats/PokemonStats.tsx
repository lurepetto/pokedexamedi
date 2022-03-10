import React from "react";
import './PokemonStats.css';

const PokemonStats = () => {

    // Conditional rendering on poke result card
    const selectedPokemon = true;

    return (
        <div className="pokemon-stats-card">
            {
                selectedPokemon ? (
                    <div>
                        {/* Add pokemon image here */}
                        <p>Name: Pikachu</p>
                        <p>Id: Some Id</p>
                        <p>Height: Some Height</p>
                        <p>Weight: Some Weight</p>
                        <p>Base Exp: 100xp</p>
                    </div>
                ) : (
                    <h2>Welcome devs, select your pokemon</h2>
                )}
        </div>
    );
};

export default PokemonStats;