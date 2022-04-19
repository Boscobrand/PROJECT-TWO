import React from "react"
import Axios from "axios"

const APImeals = () => {
    // const APP_ID = "9973533"
    // const APP_KEY = "1"
    
    // const url = 'https://www.themealdb.com/api/json/v2/9973533/latest.php'
    const url = "http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

    const getData = async () => {
        const result = await Axios.get(url);
        console.log(result)
    }

    return(
        <div className="Meal">
            <h1 onClick={getData}> Meals API Development Test</h1>
        </div>
    );
}
export default APImeals;