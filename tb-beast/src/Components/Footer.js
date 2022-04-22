
import React from 'react'
import {Link} from "react-router-dom"


function Footer() {
    return(
        <div>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/About">About</Link>
            <ul className="menu">
                <li classname="about">About</li>
                <li classname="home">Home</li>
            </ul>
        </div>
    )
}

export default Footer;




