import React, { useContext, useState } from 'react';
import { CategoryContext } from './../context/CategoryContext';
import { RecipeContext } from './../context/RecipeContext';


const Form = () => {

    const { categories } = useContext(CategoryContext);
    const { searchRecipes, toggleConsult } = useContext(RecipeContext)
    const [ search, saveSearch ] = useState({
        name: '',
        category: ''
    });

    const handleChange = (e) => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        toggleConsult(true);
        searchRecipes(search);
    }

    return (  
        <form
            className="col-12"
            onSubmit={handleOnSubmit}
        >  
            <fieldset className="text-center">
                <legend>Search drinks by category or ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4"> 
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search by ingredient"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={handleChange}
                    >
                        <option value="">Search by category</option>
                        {
                            categories.map((c) => (
                                <option key={c.strCategory} value={c.strCategory}>{c.strCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-info"
                        value="Search..."
                    />
                </div>
            </div>

        </form>
    );
}
 
export default Form;