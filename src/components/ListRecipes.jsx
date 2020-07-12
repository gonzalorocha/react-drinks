import React, { useContext } from 'react'
import { RecipeContext } from './../context/RecipeContext';
import Recipe from './Recipe';

const ListRecipes = () => {
    const { recipes } = useContext(RecipeContext);
    
    return (
        <div className="row mt-5">
            {
                recipes.map((recipe) => (
                    <Recipe 
                        key={recipe.idDrink} 
                        recipe={recipe}
                    />
                ))
            }
        </div>
      );
}
 
export default ListRecipes;