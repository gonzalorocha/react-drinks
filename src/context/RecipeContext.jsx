import React, {createContext, useEffect, useState}  from 'react';
import axios from 'axios';

export const RecipeContext = createContext();

const RecipeProvider = (props) => {

    const [recipes, saveRecipes] = useState([]);
    const [consult, toggleConsult ] = useState(false);
    const [search, searchRecipes] = useState({
        name: '',
        category: ''
    })

    useEffect(()=> {
        if (consult) {
            getRecipe()
        }
    }, [search]);

    const getRecipe = async() => {
        const { name, category } = search;
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
        const res = await axios.get(URL);
        toggleConsult(false);
        console.log(res.data.drinks);
        saveRecipes(res.data.drinks);
    }

    return (
        <RecipeContext.Provider
            value={{
                recipes,
                searchRecipes,
                toggleConsult
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    )


}

export default RecipeProvider