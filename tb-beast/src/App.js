import React, {useState} from "react"
import { Route, Routes, Link } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import About from "./Components/About"
import ResultList from "./Components/ResultList"
import axios from "axios"
import "./App.css"




const APP = () => {

// button logic

    const   [recipes,setRecipes] = useState([]);

        const APP_ID = "59afb331"
        const APP_KEY = "b2ac96d2f234e2da44353b847332685e"   
         
        const url1 = 'https://api.edamam.com/search?q=seafood&app_id=' + APP_ID + "&app_key=" + APP_KEY;
        
        const url2 = 'https://api.edamam.com/search?q=beef&app_id=' + APP_ID + "&app_key=" + APP_KEY;
            

            
        const getData1 = async () => {
            const result = await axios.get(url1);
            setRecipes(result.data.hits)
        }
        
        const getData2 = async () => {
            const result = await axios.get(url2);
            setRecipes(result.data.hits)
        }

    
    return(

        <div className="APP">
            <nav>
                <Link to ="/"><h4>W&D</h4></Link>
                <div>
                    <Link to="/"><h4>Home</h4></Link>
                    <Link to="/About"><h4>About</h4></Link>
                </div>
            </nav>
            <Header getData1={getData1} getData2={getData2}/>
            <main>

            <Routes>
  
                <Route path = "/About/" element={<About />}></Route>
                <Route path = "/Footer/" element = {<Footer />} />
                {/* <Route path = "/ResultList/:Recipe" element={<Recipe/>}/> */}
                <Route path = "/ResultList/" element={<ResultList recipes={recipes}/>}/>
           
            </Routes>



           

            </main>
        </div>

    );
}



export default APP;