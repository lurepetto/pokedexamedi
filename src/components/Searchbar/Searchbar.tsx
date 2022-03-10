import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = (props: any) => {
    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const onChange = (event:any) => {
        setSearch(event.target.value);
        if (event.target.value.length === 0) {
            onSearch(null);
        }
    };

    const onClick = async (event: any) => {
        onSearch(search);
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search your favorite Pokemon by it's full name 😺" type="text" onChange={onChange} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Search</button>
            </div>
        </div>
    )
};

export default Searchbar;