import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";


import "./Navbar.css"

function Navbar(){
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return(
    <header>
      <h3>Wine tèt ou</h3>
      <nav ref={navRef}>
      
        <a href="/">Home</a>
        <a href="/wine-list">Wine List</a>
        <a href="/favorites">Favorites</a>
        <a href="/about">About Us</a>
   <button className="nav-btn nav-close-btn"   onClick={showNavbar}>
   <FaTimes/>
   </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}

export default Navbar;



