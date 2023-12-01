import logo from  "../pics/logo_dark_horizontal_097s7oa.svg"
import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'

//import Dropdown from './dropdownmenu';


function Navbar({ darkMode, toggleDarkMode }) {
   

  const [search, setsearch] = useState(false);
  const displaySearch = () => {
    setsearch(true)
  }
  const siddenSearch = () => {
    setsearch(false)
  }

  const [navbars, setnavbars] = useState(false);
  const [hall, sethall] = useState("false");
  const NabBars = () => {
    setnavbars(true)
  }


  const menuItems = [
    { name: 'About', link: '/' },
    { name: 'Leads', link: '/' },
    { name: 'Community Guidelines', link: '/' },
    { name: 'Blog', link: '/' },
    { name: 'Solution Challenge', link: '/' },
  ]

  const dartAction = () => {
    // Call the toggleDarkMode function passed from the parent
    toggleDarkMode();
    //setDarkMode(!darkMode);
  };

  
  return (
    <>
    <div style={{ backgroundColor : darkMode ? "#1a1a1a" : "", color: darkMode ? "white" : "" }}  class="navbar d-lg-flex border-bottom align-items-center justify-content-between position-relative">
        <div class="header-content">
                <i onClick={NabBars} style={{ fontSize: "16px" }} class="fa-solid fa-bars d-lg-none "></i>
                <div>
                    <img src={logo} />
                
                </div>
                <i onClick={displaySearch} style={{ fontSize: "16px" }} class="d-lg-none ms-3 fa-solid fa-magnifying-glass"></i>

                <div style={{ backgroundColor : darkMode ? "#1a1a1a" : "", color: darkMode ? "white" : ""  }}  class={`me-lg-3 ${navbars ? "list": "items"}`} >
                    <i onClick={() =>{setnavbars(false)}} style={{ fontSize: "16px" }} class="fa-solid fa-x d-lg-none float-end"></i>
                    <ul class=" list-unstyled mt-lg-2">
                        <li class="d-lg-inline-block ">
                            <Link style={{ backgroundColor : darkMode ? "#1a1a1a" : "white", color: darkMode ? "white" : "#62666d" }} class="text-decoration-none">About GDSC</Link>
                        </li>
                        <li class="d-lg-inline-block ms-lg-3">
                            <Link style={{ backgroundColor : darkMode ? "#1a1a1a" : "white", color: darkMode ? "white" : "#62666d" }} class="text-decoration-none">Chapters</Link>
                        </li>
                        <li class="d-lg-inline-block ms-lg-3">
                            <Link style={{ backgroundColor : darkMode ? "#1a1a1a" : "white", color: darkMode ? "white" : "#62666d" }} class="text-decoration-none">Upcoming events</Link>
                        </li>
                        <div class=" border-bottom border-1 d-lg-none"></div>
                        <li onClick={displaySearch} class="d-lg-inline-block ms-lg-3 d-xs-none d-sm-none d-md-none ">    <i style={{ fontSize: "16px" }} class="fa-solid fa-magnifying-glass d-lg-block d-xs-none d-sm-none d-md-none "></i></li>
                        
                        <li class="d-lg-inline-block ms-lg-3">
                            <Link style={{ backgroundColor : darkMode ? "#1a1a1a" : "white", color: darkMode ? "white" : "#62666d" }} class="text-decoration-none">profil</Link>
                        </li>
                        <li class="d-lg-none ms-lg-3">
                            <Link style={{ backgroundColor : darkMode ? "#1a1a1a" : "white", color: darkMode ? "white" : "#62666d" }} class="text-decoration-none">My ticket</Link>
                        </li>
                        <div class=" border-bottom border-1 d-lg-none"></div>
                        <li class="d-lg-none ms-lg-3">
                            <button className='border-0 bg-transparent' onClick={dartAction} >
                                <i id="darkbutton1" style={{fontSize:"30px",color: darkMode ? "white" : "#1a1a1a"   }} class="fa-solid fa-circle-half-stroke top-50 "></i>
                            </button>
                        </li>
                        <li class="d-lg-none ms-lg-3">
                            <Link style={{ backgroundColor : darkMode ? "#1a1a1a" : "white", color: darkMode ? "white" : "#62666d" }} class="text-decoration-none">Settings & privacy</Link>
                        </li>
                        <li class="d-lg-none ms-lg-3">
                            <Link style={{ backgroundColor : darkMode ? "#1a1a1a" : "white", color: darkMode ? "white" : "#62666d" }} class="text-decoration-none">Log out</Link>
                        </li>
                    </ul>
                </div>

                {/*search && <Dropdown menuItems={menuItems} />*/}

                <div style={{ zIndex:"5", marginTop: "3.8rem", color: "#62666d", padding:"15px 0px 15px 0px",width:"80%",borderRadius:"3px" }} class={`searchBox position-absolute bg-white  border-1 w-100 p-3  ${search ? "d-block" : "d-none"} `}>
                    <i style={{ fontSize: "16px" }} class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='Search Here...' class= "ms-2 border-0 outline-none ps-1 bg-transparent"/>
                    <i onClick={siddenSearch} style={{ fontSize: "16px" }} class="mt-1 fa-solid fa-x float-end"></i>
                </div>

                <div class="SeacrhHoll">
                    ghgf
                </div>
        </div>
    </div>
    <button className='border-0 bg-transparent' onClick={dartAction} >
    <i id='darkbutton2'  style={{ fontSize:"30px",color: darkMode ? "white" : "#1a1a1a"   }} class="fa-solid fa-circle-half-stroke position-fixed top-50 "></i>
    </button>
    </>
  )
}

export default Navbar