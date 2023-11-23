import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
           <div className="header--logo">
             <a href="#">
                <img src="src/assets/logo-icons/logo-name.png" alt="" />
             </a>
           </div>
           <div className="header--user">
            <a href="#">
            <img src="src/assets/logo-icons/logo-user.png" alt="" />

            </a>
           </div>
        </header>
    )
}