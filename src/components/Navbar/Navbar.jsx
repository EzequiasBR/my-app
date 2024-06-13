import React from "react";

import imgLogo from "../../assets/img/logo.png";
import "./style.css"

export class Navbar extends React.Component {
   render() {
      return (
         <header>
            <nav id="navBar">
               <div className="nav-brand">
                  <img src={imgLogo} alt="Logo do site foto do planeta jupite" />
                  <h1>Space Flight News</h1>
               </div>
               <ul className="nav-list">
                  <li>
                     <a href="/">Home</a>
                  </li>
                  <li>
                     <a href="/">Trending</a>
                  </li>
                  <li>
                     <a href="/">Catecories</a>
                  </li>
                  <li>
                     <a href="/">About us</a>
                  </li>
               </ul>
            </nav>
         </header>
      );
   }
}