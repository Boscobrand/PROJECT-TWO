import React from 'react';
import { Link } from 'react-router-dom';
import Recipe from ".Components/Recipe"

function ResultList(props) {
    let list = props.data.map(recipe => {
        return (
            <p className="recipeList" key={recipe.label}>
            <Link to={recipe.label}>
                {recipe.name}
            </Link>
            </p>
        )

    })
    return (
        <div>
            {list}
        </div>
    )
}




export default ResultList;