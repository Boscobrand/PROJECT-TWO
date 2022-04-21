import React, {useState} from "react"
import axios from "axios"



// }

function Recipe() {

    const[recipes,setRecipes] = useState();
    
    const APP_ID = "59afb331"
    const APP_KEY = "b2ac96d2f234e2da44353b847332685e"
    
    const url = 'https://api.edamam.com/search?q=seafood&app_id=' + APP_ID + "&app_key=" + APP_KEY;
    
    const getData = async () => {
        const result = await axios.get(url);
        setRecipes(result.data.hits)
        console.log(result.data.hits)
        
    }

    const recipeLog= () => {
        console.log(recipes[0].recipe.image)
        console.log(recipes[0].recipe.label)
        console.log(recipes[0].recipe.url)
        console.log(recipes[0].recipe.ingredients)
    }

    //if...else condition? option1:option2 


    return(
        <div className="Initiate">
            <h1>TEST</h1>
            <button 
                onClick={getData}
                className="WhiteButton"
                type="submit">Let's Go White</button>

            <div className="recipeBox">
                    <img className="pic"
                        src={recipes?recipes[0].recipe.image:""} alt="food"></img>

                    {/* <h3 className="name">{recipes?recipes[0].recipe.label:""}</h3>

                    <p className="url">{recipes?recipes[0].recipe.url:""}</p>

                    <p className="ingredients">{recipes?recipes[0].recipe.ingredients:""}</p> */}

                    <button onClick={recipeLog}>very tiny button</button>
                


            </div>
        </div>

    );
}
export default Recipe;