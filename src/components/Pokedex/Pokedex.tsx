import React from "react";
import "./Pokedex.css";
import PokeCard from '../PokeCard/PokeCard';

const Pokedex = (props:any) => {
    const {pokemons, loading} = props;

    return (
        <div>
            { loading ? 
            <div>Cargando pokemones...</div> :
            <div className="pokedex-grid">
                {pokemons.map((pokemon: any, idx: any) => {
                    return (
                        <PokeCard pokemon={pokemon} key={pokemon.name} />
                    )
                })}
            </div>
            }
        </div>
    )
}
export default Pokedex;