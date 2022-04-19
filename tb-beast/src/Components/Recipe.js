import React, {useState} from "react"
import Axios from "axios"



//RECIPE API ACCESS

    const APP_ID = "59afb331"
    const APP_KEY = "b2ac96d2f234e2da44353b847332685e" 
    const url = 'https://api.edamam.com/search?q=seafood&app_id=' + APP_ID + "&app_key=" + APP_KEY;


const Recipe = () => {
    const[recipes,setRecipes] = useState();
   
    const getData = async () => {
        const result = await Axios.get(url);
        console.log(result)
        setRecipes(result.data.hits)
        console.log(result.data.hits)
    }

    // handleSubmit(e) = () => {
    //     e.preventDefault;
    //     getData();
    // };


    return(
        <div className="APP">
            <h1>EDMAM API Development Test</h1>
            <button 
                onClick={getData}
                className="whiteButton"
                type="submit">Let's Go White</button>

            <div className="recipes">
                


            </div>

        </div>

    );
}
export default Recipe;