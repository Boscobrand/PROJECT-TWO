import React from 'react';




function ResultList(props) {
     
     return(

         <div className="recipeBox">
            {props.recipes.map(recipe => {
                return(
                    <div className = "recipeCard">
                        <div className="name">{recipe.recipe.label}</div>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} className="pic"/>
                        <div><a href={recipe.recipe.url} target="_blank" className="B-url" rel="noopener noreferrer"> Recipe </a></div>
                        <div><button className="i-button">Ingredients</button></div>
                    </div>    
                )
            
            })}
            
        </div>

     )

}
export default ResultList;