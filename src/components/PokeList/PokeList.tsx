import './Pokelist.css';
import React from 'react';
import PokeCard from '../PokeCard/PokeCard';
import { PokemonSchema } from '../../types/PokemonSchema';

interface PokeListProps {
    searchedPokemons: PokemonSchema[];
}

const PokeList = ({searchedPokemons}: PokeListProps) => {
    return (
        <div className="pokelist">
            {
                searchedPokemons.map((pokemon) => {
                    return (
                        pokemon.name && (
                            <PokeCard
                                key={pokemon.id}
                                name={pokemon.name}
                                spriteUrl={pokemon.sprites.normal}
                            />
                        )
                    )
                })
            }
        </div>
    )
}

export default PokeList;