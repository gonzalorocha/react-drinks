import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import ListRecipes from './components/ListRecipes'


//Provider 
import CategoryProvider from './context/CategoryContext';
import RecipeProvider from './context/RecipeContext';
import ModalProvider from './context/ModalContext';



const App = () => {
    return (
        <CategoryProvider>
            <RecipeProvider>
                <ModalProvider>
                    <Header />
                    <div className="container mt-5">
                        <div className="row">
                            <Form />
                        </div>
                            <ListRecipes/>
                    </div>
                </ModalProvider>
            </RecipeProvider>
        </CategoryProvider>
    );
}

export default App;
