import React from 'react'
import { Link }from 'react-router-dom'
import Recipe from ".Components/Recipe"

function ShowRecipe(props) {
    return(
        <div className="recipeHome">
            <h3>Recipes that go so well with wine there will be nothing left!</h3>
            <div className= "recipeParent">
                {props.recipe.map(recipe => (<div className= "recipeItem" key={recipe.image}>
                    <Link to={'/SUMMARYPAGE/'+ recipe.name} onClick={() => this.props.setrecipe(recipe)}>
                        <img src={recipe.image} alt={recipe.name}/></Link></div>
                ))}
            </div>
        </div>
        
    )
    
}
export default ShowRecipe;
