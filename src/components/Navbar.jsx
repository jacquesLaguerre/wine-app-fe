// import { useRef, useState } from "react";
// import {FaBars, FaTimes, } from "react-icons/fa";

// import wine from "../wine";


// import "./Navbar.css"



// function Navbar(){
//   const [searchTerm, setSearchTerm] = useState("")
//   const navRef = useRef()

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav")
//   }

//   return(
//     <header>
//       <h3>Wine tèt ou</h3>
//       <nav ref={navRef}>
      
//         <a href="/">Home</a>
//         <a href="/wine-list">Wine List</a>
//         <a href="/favorites">Favorites</a>
//         <a href="/about">About Us</a>
      
//       <div>

//         <input
//         type="text"
//         onChange={event => {setSearchTerm(event.target.value)}}
//         className ="place-holder"
//         placeholder = "Search"
//         {...wine.filter((val)=>{
// if(searchTerm === ""){
//   return val
// } else if (val.wine.toLowerCase().includes(searchTerm.toLowerCase().includes(searchTerm.toLowerCase()))) {
//   return val
// }
//         }).map((val,key)=>{
//           return (

//             <div className='wine' key={key}>
              
//               {val.wine}</div>
//             );
//         })}
//         />
//         </div>
     
      
//    <button className="nav-btn nav-close-btn"   onClick={showNavbar}>
//    <FaTimes/>
//    </button>
//       </nav>
//       <button className="nav-btn" onClick={showNavbar}>
//         <FaBars/>
//       </button>
//     </header>
//   )
// }

// export default Navbar;



import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import wine from "../wine";
import "./Navbar.css";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const filteredWines = wine.filter((val) => {
    if (searchTerm === "") {
      return false;
    } else if (val.wine.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <header>
      <h3>Wine tèt ou</h3>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/wine-list">Wine List</a>
        <a href="/favorites">Favorites</a>
        <a href="/about">About Us</a>
        <div>
          <input
            type="text"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className="place-holder"
            placeholder="Search"
          />
        </div>
        <div>
          {filteredWines.map((val, key) => {
            return (
              <div className="wine" key={key}>
                {val.wine}
              </div>
            );
          })}
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
