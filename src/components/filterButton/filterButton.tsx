import React from 'react';
import f from "./filterButton.module.css"

import {AppDispatch} from "../../BLL/store";
import {filterCardsAC} from "../../BLL/appReducer";


const FilterButton = () => {

   const dispatch = AppDispatch()


    return (
        <button onClick={()=>dispatch(filterCardsAC())} className={f.filter}>Filter</button>
    );
};

export default FilterButton;