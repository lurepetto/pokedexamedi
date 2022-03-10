import React, { useState, useEffect } from "react";
import Pokedex from '../Pokedex/Pokedex';
import './App.css';
import { UnpatchedPokemonSchema, PokemonSpritesSchema, PokemonSchema } from '../../types/PokemonSchema';
import { pokemonData } from "../../data/pokemonData";
import { getPokemons, getPokemonData } from '../../services/api';

interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemons: PokemonSchema;
}

export default function App () {
    const [pokemons, setPokemons] = useState<any>([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState();
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);

    const fetchPokemons = async () => {
        try {
            const data = await getPokemons(12, 12 * page);
            // Cambiamos los results por promesas para que traiga la info completa con
            // getPokemonData()
            const promises = data.results.map(async (pokemon: any) => {
                return await getPokemonData(pokemon.url);
            })
            const results = await Promise.all(promises)
            setPokemons(results);
            setLoading(false);
        } catch (err) {}
    };

    useEffect(() => {
        if (!searching) {
            fetchPokemons();
        }
    }, [page]);

    return (
        <div>
            { loading ? <div>Cargando Pokemones...</div> 
            :
            <Pokedex 
                pokemons={pokemons} 
                page={page}
                setPage={setPage}
            />}
        </div>
    )
}