// import React, {useState} from 'react'
// import {Link} from "react-router-dom"
// import axios from "axios"


// function Recipe() {

//     const[recipes,setRecipes] = useState();
    
//     const APP_ID = "59afb331"
//     const APP_KEY = "b2ac96d2f234e2da44353b847332685e"
    
//     const url = 'https://api.edamam.com/search?q=seafood&app_id=' + APP_ID + "&app_key=" + APP_KEY;
    
//     const getData = async () => {
//         const result = await axios.get(url);
//         setRecipes(result.data.hits)
//     }

//     }

    
//     return(
//         <div className="Initiate">
//             <h1>TEST</h1>
//             <button 
//                 onClick={getData}
//                 className="WhiteButton"
//                 type="submit">Let's Go White</button>
        
//             <button onClick={recipeLog}>very tiny button</button>   

//         </div>
//     );
  

// export default Recipe