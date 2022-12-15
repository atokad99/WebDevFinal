
//    import { ref } from 'vue';
//    import { RouterLink } from 'vue-router';
//    import LoginBadge from './LoginBadge.vue';

//<style>
//    .Link-active {        
//        border-bothrefm: #792d2d 2px solid;
//    }
//</style>

import Link from "next/link"
import { useState } from "react"

//const Cart = ()=> <div></div>
const LoginBadge = ()=> <div></div>
//const MessageList = ()=> <div></div>

export default ()=>{
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">

        <div className="container">      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/" className="navbar-item">
              <img src="../assets/fitnesslogo.png" />
            </Link>   

            <Link className="navbar-item" href="/activity">
              Activity
            </Link>

            <Link className="navbar-item" href="/social">
              Social
            </Link>

            <Link className="navbar-item" href="/admin">
              Admin
            </Link>
          </div>      
          <div className="navbar-end">
            <div className="navbar-item">
              <login-badge></login-badge>
            </div>
          </div>
        </div>
        </div>
      </nav>

)
}