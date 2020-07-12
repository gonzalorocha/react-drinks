import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Recipe = ({recipe}) => {

    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleModal = () => {
        if(open){
            setIdRecipe(null);
            saveInfoRecipe({});
        }
        setOpen(!open)
    }

    const { infoRecipe, setIdRecipe, saveInfoRecipe } = useContext(ModalContext);

    const handleOnClick = (e) => {
        setIdRecipe(recipe.idDrink);
        handleModal();
    }

    const showIngredient = info => {
        let ingredients = [];
        for(let i=1; i<16; i++){ 
            if( info[`strIngredient${i}`] ) {
                ingredients.push(
                    <li key={`strIngredient${i}`}>{info[`strIngredient${i}`]} {info[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Im ${recipe.strDrinkThumb}`} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={handleOnClick}
                    >
                        See recipe
                    </button>
                    <Modal 
                        open={open}
                        onClose={() => handleModal()}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{infoRecipe.strDrink}</h2>
                            <h3 className="mt-4">Instruction</h3>
                            <p>
                                {infoRecipe.strInstruction}
                            </p>
                            <img  className="img-fluid my-4" src={infoRecipe.strDrinkThumb} alt={infoRecipe.strDrinkThumb}/>
                            <h3>Ingredients and quantities</h3>
                            <ul>
                                {showIngredient(infoRecipe)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>

        </div>
     );
}
 
export default Recipe;