import React from "react"
import Axios from "axios"
import APImeals from "./Components/APImeals"
import APIedmam from "./Components/APIedmam"

const App = () => {
   

    return(
        <div className="APP">
            <h1><APIedmam/></h1>

            <h1><APImeals/></h1>
            </div>

    );
}
export default App;