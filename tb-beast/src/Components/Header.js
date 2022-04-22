
import React from 'react'
import {Link } from "react-router-dom"

function Header (props) {
    return(
        <div className = "Header">
                        <nav>
                <Link to ="/"><h4>W&D</h4></Link>
                <div>
                    <Link to="/"><h4>Home</h4></Link>
                    <Link to="/About"><h4>About</h4></Link>
                </div>
            </nav>
            <div className="Headline">
                <h1> Wine & Dine </h1>
            </div>

            <div>
                <hr />
            </div>
            
            <div className="Subhead">
                <h2 id="A"> Recipe recommendations based on your choice of wine.</h2>
                <h2 id="B" >Pair wine and food with the push of a button. </h2>
            </div>

            <div>
                <Link to="ResultList"><div><button onClick={props.getData1} className="WhiteButton" type="submit">Let's Go White</button></div></Link>               
                <Link to="ResultList"><div><button onClick={props.getData2} className="RedButton" type="submit">Let's Go Red</button></div></Link>
            </div>


            <div className="Lefthand">
                <h3 id="C"> Wine that pairs well</h3>
                <h3 id="D"> with the recipes on the right...</h3>
            </div>

            <div className="Righthand">
                 <h3 id="E"> Food that pairs so well</h3>
                 <h3 id="F"> with wine there will be nothing left!</h3>
            </div>



        </div>
    )


}
export default Header;