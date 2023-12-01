import React, { useContext } from 'react'
import gdsc from "../pics/gdscFbCover.jpg"
import { ThemeContext } from '../App'

function Header() {
  const dark = useContext(ThemeContext)
  return (
    <>
    <div style={{ backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : "" }}  class="header">
        <img class="header-background" src = {gdsc} />
        <div style={{ lineHeight:"3.8rem", lineHeight:"1.5", color:dark ? "white" : "rgb(41, 44, 57)", fontSize:"46px" }} class="fw-bolder mt-4 mb-4 ">Université des Sciences et de la Technologie d'Oran - Mohamed Boudiaf USTOMB</div>
        <p style={{ color:dark ? "white" : "#29153d" }}>413 Group Members</p>
        <div class="d-flex" style={{ color:"#29153d" }}>
            <i  style={{ fontSize:"25px", backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : "" }} class="fa-brands fa-facebook border border-2 rounded-circle p-2"></i>
            <i style={{ fontSize:"25px", backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : ""  }} class="fa-brands fa-x-twitter ms-2  border border-2 rounded-circle p-2"></i>
            <i style={{ fontSize:"25px", backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : ""  }} class="fa-brands fa-linkedin-in ms-2 border border-2 rounded-circle p-2"></i>
            <i style={{ fontSize:"25px", backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : ""  }} class="fa-brands fa-instagram ms-2 border border-2 rounded-circle p-2"></i>
            <i style={{ fontSize:"25px", backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : ""  }}  class="fa-regular fa-envelope ms-2 border border-2 rounded-circle p-2"></i>
        </div>
    </div>
    <div id='joined-buttonb-bg' style={{ margin: "3rem 0px", width: "100%", backgroundColor: dark ? "rgba(0, 0, 0, .4)" : "rgba(226, 226, 226, 1)", paddingLeft: "19px", paddingRight: "19px", paddingTop: "7px", paddingBottom: "7px" }} class="d-flex justify-content-center">
    <button class="text-white fw-bolder bg-primary pe-4 ps-4 pt-2 pb-2 border-0">
        Joined
    </button>
    </div>
</>
  )
}

export default Header