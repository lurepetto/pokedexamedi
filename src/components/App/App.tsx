import React from "react";
import Pokedex from "../Pokedex/Pokedex";
import './App.css';
import { UnpatchedPokemonSchema, PokemonSpritesSchema, PokemonSchema } from '../../types/PokemonSchema';
import { pokemonData } from "../../data/pokemonData";

interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemons: PokemonSchema;
}

class App extends React.Component<any, any> {
    state = {
        searchField: "",
        allPokemons: [],
        seachedPokemons: [],
        selectedPokemons: undefined
    }

    patchedPokemonData = (pokemons: UnpatchedPokemonSchema[]): PokemonSchema[] => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined
            };

            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites)
            } catch (err) {
                console.log("Exception while parsing the sprites: ", err);
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites
            }
            
            return patchedPokemon;
        });

        return patchedPokemons;
    } 

    componentDidMount() {
        // Patch the stringified pokemon sprites
        const patchedPokemons: PokemonSchema[] = this.patchedPokemonData(
            pokemonData
        );

        // Update the state with the patched pokemons
        this.setState({
            allPokemons: patchedPokemons,
            searchedPokemons: patchedPokemons
        })

    }

    render() {
        return (
            <div className="App">
                <h1>PokedeXamedi</h1>
                <Pokedex 
                    searchedPokemons={this.state.seachedPokemons}
                />
            </div>
        )
    }
}

export default App;