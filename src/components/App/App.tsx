import React, { useState, useEffect } from "react";
import Pokedex from '../Pokedex/Pokedex';
import './App.css';
import { getPokemons, getPokemonData, searchPokemon } from '../../services/api';
import Searchbar from "../Searchbar/Searchbar";

export default function App () {
    const [pokemons, setPokemons] = useState<any>([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(12, 12 * page);
            // Cambiamos los results por promesas para que traiga la info completa con
            // getPokemonData()
            const promises = data.results.map(async (pokemon: any) => {
                return await getPokemonData(pokemon.url);
            })
            const results = await Promise.all(promises)
            setPokemons(results);
            setLoading(false);
            setTotal(Math.ceil(data.count / 12))
        } catch (err) {}
    };

    useEffect(() => {
        if (!searching) {
            fetchPokemons();
        }
    }, [page]);

    const onSearch = async (pokemon:any) => {
        if (!pokemon) {
            return fetchPokemons();
        }

        setLoading(true);
        setNotFound(false);
        setSearching(true);
        const result = await searchPokemon(pokemon);
        if (!result) {
            setNotFound(true);
            setLoading(false);
            return
        } else {
            setPokemons([result]);
            setPage(0);
            setTotal(1);
        }
        setLoading(false);
        setSearching(false);
    };

    return (
        <div>
            <div className="header">
                <h1>Pokedexamedi</h1>
            </div>
            <Searchbar onSearch={onSearch} />
            {notFound ? (
                <div className="not-found">
                    <span className="sad-pika">😿</span>
                    We are sorry! We didn't found the Pokemon you were looking for :(
                </div>
            ) : (
            <Pokedex 
                loading={loading}
                pokemons={pokemons} 
                page={page}
                setPage={setPage}
                total={total}
            />
            )}
        </div>
    )
}