import React from "react";
import "./PokeCard.css";

const PokeCard = (props: any) => {
    const {pokemon} = props;
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image"/>
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div className="pokemon-id">
                        N.º{pokemon.id}
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        Type: 
                        {pokemon.types.map((type: any, idx: any) => {
                            return (
                                <div key={idx} className="pokemon-type-text"> {type.type.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeCard;