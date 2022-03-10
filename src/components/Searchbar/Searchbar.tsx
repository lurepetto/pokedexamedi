import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = (props: any) => {
    const { onSearch } = props;
    const [search, setSearch] = useState("");

    // receive and set incoming pokemon name
    const onChange = (event:any) => {
        setSearch(event.target.value);
        if (event.target.value.length === 0) {
            onSearch(null);
        }
    };
    // search pokemon
    const onClick = async (event: any) => {
        onSearch(search);
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search your favorite Pokemon by it's full name 😺" type="text" onChange={onChange} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
    )
};

export default Searchbar;