import React from "react";
import PokemonStats from "../PokemonStats/PokemonStats";
import SearchBox from "../SearchBox/SearchBox";
import './Pokedex.css';
import PokeList from '../PokeList/PokeList';
import { PokemonSchema } from "../../types/PokemonSchema";

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
}

const Pokedex = ({ searchedPokemons }: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
                <PokeList 
                    searchedPokemons={searchedPokemons}
                />
            </div>
            <div className="pokesearchresult-container">
                <PokemonStats />
            </div>
        </div>
    )
}

export default Pokedex;