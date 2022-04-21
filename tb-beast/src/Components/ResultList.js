import React from 'react';
import { Link } from 'react-router-dom';


function ResultList(props) {
    
    let list = props.recipes.recipe.map(recipes => {
        return (
            <p className="recipeList" key={recipes.recipe.label}>
            <Link to={recipes.recipe.label}>
                {recipes.recipe.url}

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


        //             <div className="recipeBox">
                    
                    
                    
        //             <img className="pic"
        //                 src={recipes?recipes[0].recipe.image:""} alt="food"></img>

        //             {/* <h3 className="name">{recipes?recipes[0].recipe.label:""}</h3>

        //             <p className="url">{recipes?recipes[0].recipe.url:""}</p>

        //             <p className="ingredients">{recipes?recipes[0].recipe.ingredients:""}</p> */}

        //             <button onClick={recipeLog}>very tiny button</button>
                


        //     </div>
        // </div>









export default ResultList;