// import React, {useState} from "react"
// import Axios from "axios"
// import Recipe from './Recipe'


// const APIrecipes = () => {
//     const{recipes,setRecipes} = useState([]);
    
//     const APP_ID = "59afb331"
//     const APP_KEY = "b2ac96d2f234e2da44353b847332685e"
    
//     const url = 'https://api.edamam.com/search?q=seafood&app_id=' + APP_ID + "&app_key=" + APP_KEY;
    
//     const getData = async () => {
//         const result = await Axios.get(url);
//         setRecipes(result.data.hits)
//         console.log(result)
//     }

//     // handleSubmit(e) = () => {
//     //     e.preventDefault;
//     //     getData();
//     // };


//     return(
//         <div className="APP">
//             <h1>EDMAM API Development Test</h1>
//             <button 
//                 onClick={getData}
//                 className="RedButton"
//                 type="submit">Let's Go RED</button>

//             <div className="recipes">
//                 {recipes !== [] && recipes.map(recipe => 
//                     <Recipe recipe={recipe}/>)}




//             </div>

//         </div>

//     );
// }
// export default APIrecipes;