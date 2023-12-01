
import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import {current_event} from "../currentEvents"
/*import { Link } from 'react-router-dom'
import mark from "../pics/mark.jpg"*/


function About() {
  const dark = useContext(ThemeContext)

  return (
    <div style={{ backgroundColor : dark ? "1a1a1a" : "", color: dark ? "white" : "" }} class= "about mt-4">
        <ul class="list-unstyled float-end  text-dark  fw-bolder">
            <li style={{ backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : "" }} class="d-inline-block">About</li>
            <li style={{ backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Upcoming Events</li>
            <li style={{ backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Past Events</li>
            <li style={{ backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Organizers</li>
            <li style={{ backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Photos</li>
            <li style={{ backgroundColor : dark ? "#1a1a1a" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Video</li>
        </ul>
        <br></br>
        <div style={{ backgroundColor : dark ? "#1a1a1a" : "white", color: dark ? "white" : "#62666d" }} class="mt-4">
            <h2 style={{ backgroundColor : dark ? "#1a1a1a" : "white", color: dark ? "white" : "#1a1a1a" }} >About</h2>
            <p style={{ backgroundColor : dark ? "#1a1a1a" : "white", color: dark ? "white" : "#62666d" }} >GDSC USTO-MB stands for Google Developers Student Clubs of University of Science and Technology of Oran - Mohamed Boudiaf , we welcome all students from different backgrounds to join our chapter because our main goal is to create an impact and help all our members to learn new skills and get more familiar with all technologies not Google ones only in a peer to peer environement through Workshops and sessions  </p>
            <p style={{ backgroundColor : dark ? "#1a1a1a" : "white", color: dark ? "white" : "#62666d" }} >Expand your networking , gain new skills , find your peers and Join us !</p>
        </div>
            {/*<h2 style={{ backgroundColor : dark ? "#1a1a1a" : "white", color: dark ? "white" : "#1a1a1a" }} >Expand your networking , gain new skills , find your peers and Join us !</h2>
             <div class="border-1 border d-md-flex">
                <img style={{ borderRadius: "50%" }} width="150" height="150" src={mark} />
                <div class=" ms-md-">
                    <p>Nov 21, 2023 <span>Workshop / Study Group</span></p>
                    <h4>Marketing - session</h4>
                    <button class="border-1 bg-white text-primary">share</button>
                    <p>Unlock digital marketing expertise with Google Developer Student Club USTO-MB : Dive into strategies & tools to enhance your online impact.</p>
                    <div>
                        <Link>View details</Link>
                    </div>
                </div>
            </div> */}
      <div>
        <h1 style={{ backgroundColor: dark ? "#1a1a1a" : "white", color: dark ? "white" : "#1a1a1a" }} >Upcoming events</h1>
        {/*
          <p style={{ backgroundColor : dark ? "#1a1a1a" : "white", color: dark ? "white" : "#1a1a1a" }} >There are currently no upcoming events. Please check again soon.</p>
        */}
        {current_event.map((event) => (
          <div key={event.id}>
            <section class="event">
              <img src={event.img_src} alt="GDSC picture" />
              <div class="event-info">
                <h2 style={{fontWeight:"bold",color: dark ? "white" : "black"}}>{event.date}</h2><h2 style={{color: dark ? "white" : "black"}}>{event.categorie}</h2>
                <h3 style={{color: dark ? "white" : "black"}}>{event.name}</h3>
                <div class="share-button" style={{borderColor: dark ? "#62666d" : "rgb(218, 220, 224)"}}>
                    <svg width="16" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2 0.120117C9.2076 0.120117 8.4 0.927717 8.4 1.92012C8.4 2.19717 8.46813 2.45651 8.58047 2.69121L6.35156 4.92012H3.48984C3.24128 4.22337 2.58097 3.72012 1.8 3.72012C0.8076 3.72012 0 4.52772 0 5.52012C0 6.51252 0.8076 7.32012 1.8 7.32012C2.58097 7.32012 3.24128 6.81687 3.48984 6.12012H6.35156L8.58047 8.34902C8.46813 8.58372 8.4 8.84306 8.4 9.12012C8.4 10.1125 9.2076 10.9201 10.2 10.9201C11.1924 10.9201 12 10.1125 12 9.12012C12 8.12772 11.1924 7.32012 10.2 7.32012C9.92295 7.32012 9.6636 7.38825 9.42891 7.50059L7.44844 5.52012L9.42891 3.53965C9.6636 3.65199 9.92295 3.72012 10.2 3.72012C11.1924 3.72012 12 2.91252 12 1.92012C12 0.927717 11.1924 0.120117 10.2 0.120117Z" fill="rgb(26, 115, 232)"></path>
                      </svg><a href="#" style={{fontWeight:"400",fontSize: "16px",}}>Share</a>
                </div>
                <p style={{color: dark ? "white" : "black"}}>{event.description}</p>
                <a href="#" class="view-details" style={{}}>→  View details </a>
              </div>
            </section>
          </div>
        ))}
      </div>

    </div>
  );
}

export default About;
