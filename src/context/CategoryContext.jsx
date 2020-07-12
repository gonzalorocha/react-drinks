import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
export const CategoryContext = createContext();

//Provider is the place where the function and state are 
const CategoryProvider = (props) => {

    const [ categories, setCategories ] = useState([]);
    useEffect(()=>{
        getCategories();
    },[]);

    const getCategories = async() => {
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
        const res = await axios.get(URL);
        console.log(res.data.drinks);
        setCategories(res.data.drinks);
    }


    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )

}

export default CategoryProvider;