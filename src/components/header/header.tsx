import React from 'react';
import FilterButton from "../filterButton/filterButton";
import h from  "./header.module.css"

const Header = () => {
    return (

        <div className={h.header}>
           <h1>Rick and Morty characters</h1>
<FilterButton />

        </div>

    );
};

export default Header;