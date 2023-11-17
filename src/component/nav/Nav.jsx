import React from "react";
import "./Nav.scss";

const Nav = () => {
    return(
        <div className="nav-container">
            <div className="logo">
                MEMORIES
            </div>
            <div className="option">
                <div className="option-item">ABOUT</div>
                <div className="option-item">MENU</div>
                <div className="option-item">DELIVERY</div>
                <div className="option-item">LOCATION</div>
                <div className="option-item">GALLERY</div>
                <div className="option-item">CONTACT</div>
            </div>
            <div className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </div>

        
    )
}

export default Nav;