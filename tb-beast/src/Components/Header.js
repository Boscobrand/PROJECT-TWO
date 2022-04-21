
import React from 'react'


function Header () {
    return(
        <div className = "Header">
            <div className="Headline">
                <h1> Wine & Dine </h1>
            </div>

            <div className="Subhead">
                <h2> Recipe recommendations based on your choice of wine.</h2>
                <h2 >Pair wine and food with the push of a button. </h2>
            </div>

            <div className="Lefthand">
                <h3> Wine that pairs well</h3>
                <h3> with the recipes on the right...</h3>
            </div>

            <div className="Righthand">
                 <h3> Food that pairs so well with wine</h3>
                 <h3> there will be nothing left...</h3>
            </div>
        </div>
    )


}
export default Header;