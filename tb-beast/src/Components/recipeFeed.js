import React from 'react'
import {useParams} from "react-router-dom";
import {useState} from 'react';
import {useEffect} from 'react';

// const url_1 = "https://www.themealdb.com/api/json/v2/9973533/latest.php/"
// const access_1 = "1"

// const RecipeFeed = (props) => {
//     const [data, setData] = useState();
//     const recipeData = useParams().Category
//     const recipe = props.data.filter(recipe => recipe.data ===recipeData)[0];

//     useEffect(() => {
//         const url_call = `{ url_1 }${recipe.data}/quote?token=${access_1}`;

//             fetch(url_call)
//             .then((res) => res.json())
//             .then((res) => {
//                 setData(res.newRecipe)
//             })
//             .catch((error => {
//                 console.error(error);
//             })
//             )
//     },[])

//     return (
//         <div className="recipe">

//             <div className="category">{recipe.strCategory}</div>
//             <div className="name">{recipe.strMeal}</div>
//             <div className="instructions">{recipe.strInstructions}</div>
//         </div>
//     )
//     console.log()
// }

// export default RecipeFeed;