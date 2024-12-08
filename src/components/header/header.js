import React from "react";
import './header.sass'
import Nav from "../nav/nav";

const Header = ()=>{
    return(
        <div className="container">
            <header className="header">
                <img src="images/logo.svg" className="logo"></img>
                <Nav/>
                <img src="images/menu.svg" className="menu-btn"></img>
            </header>
        </div>
        
    )
}

export default Header