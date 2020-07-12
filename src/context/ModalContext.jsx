import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [idRecipe, setIdRecipe] = useState(null);
    const [infoRecipe, saveInfoRecipe] = useState({});

    useEffect(() =>{
        getRecipe()
    },[idRecipe]);

    const getRecipe = async() => {
        if (!idRecipe) return;
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
        const res = await axios.get(URL);
        saveInfoRecipe(res.data.drinks[0]);
    }

    return(
        <ModalContext.Provider
            value={{
                setIdRecipe,
                infoRecipe,
                saveInfoRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;