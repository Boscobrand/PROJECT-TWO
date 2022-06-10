import React from 'react'
import { Link }from 'react-router-dom'


function ShowRecipe(props) {
    return(
        <div className="recipeHome">
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
