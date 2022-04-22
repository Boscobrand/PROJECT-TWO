import React, {useEffect, useState} from "react"
import { Route, Routes, Link, Navigate } from "react-router-dom"
import Recipe from "./Components/Recipe"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
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
            console.log(result.data.hits)
        }
        
        
        const getData2 = async () => {
            const result = await axios.get(url2);
            setRecipes(result.data.hits)
            console.log(result.data.hits)
        }

       

    return(

        <div className="APP">
 

            
            <Routes>
                <Route path = "/Header/" element={<Header />}/>   
                <Route path = "/" element = {<Header />}/>
                <Route path = "/ResultList/:Recipe" element={<Recipe/>}/>
                <Route path = "/ResultList/" element={<ResultList recipes={recipes}/>}/>
                <Route path = "/Footer/" element = {<Footer />} />
            </Routes>


            <div><button onClick={getData1} className="WhiteButton" type="submit">Let's Go White</button></div>               
            
            <div><button onClick={getData2} className="RedButton" type="submit">Let's Go Red</button></div>




        </div>

    );
}



export default APP;