import React from 'react'
import './Header.css'
import Clock from './Clock'


// import { faHome } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
   const user = "Margaret"
   return (
       <div className="app-header">
           <div className="brand">
               <span className="logo"><img src={require("./../images/logo.png")} alt="DryFi"/></span>
               <h1 className="title">DryFi</h1>
           </div>
           <div className="links">
               <span className="user-greet">
                   Hello {user}
               </span>
               <Clock />
           </div>

       </div>
   )
   }