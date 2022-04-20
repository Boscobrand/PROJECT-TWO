import React, {useState} from "react"
import Axios from "axios"



const Recipe = (props) => {
    const{recipes,setRecipes} = useState([]);
    
    const APP_ID = "59afb331"
    const APP_KEY = "b2ac96d2f234e2da44353b847332685e"
    
    const url = 'https://api.edamam.com/search?q=seafood&app_id=' + APP_ID + "&app_key=" + APP_KEY;
    
    const getData = async () => {
        const result = await Axios.get(url);
        // setRecipes(result.data)
        console.log(result.data.hits)
    }

    return(
        <div className="Initiate">
            <h1>TEST</h1>
            <button 
                onClick={getData}
                className="WhiteButton"
                type="submit">Let's Go White</button>

            <div className="recipe">
                {/* <div className="name">{label}</div> */}
                {/* (url, image, ingredients) */}
          
                

            </div>
        </div>

    );
}
export default Recipe;