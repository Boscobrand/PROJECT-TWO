import React from "react"
import Axios from "axios"


const APIedmam = () => {
    const APP_ID = "59afb331"
    const APP_KEY = "b2ac96d2f234e2da44353b847332685e"
    
    const url = 'https://api.edamam.com/search?q=seafood&app_id=' + APP_ID + "&app_key=" + APP_KEY;
    
    const getData = async () => {
        const result = await Axios.get(url);
        console.log(result)
    }

    return(
        <div className="APP">
            <h1 onClick={getData}> EDMAM API Development Test</h1>
            </div>

    );
}
export default APIedmam;