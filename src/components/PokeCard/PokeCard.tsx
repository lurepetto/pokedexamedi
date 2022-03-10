import React from "react";
import './PokeCard.css';

interface PokeCardProps {
    spriteUrl?: string;
    name: string;
}

const PokeCard = ({spriteUrl, name}: PokeCardProps) => {
    return ( 
        <div className="pokecard">
            <img className="pokemon-sprite" alt="pokemon" src={spriteUrl} />
            <p>{name}</p>
        </div>
    )
}

export default PokeCard;