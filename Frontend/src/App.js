import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Organizer from './components/Organizer';
import Footer from './components/Footer';
import React, { useState } from 'react'
import { createContext } from 'react';
import UsersDisplay from './components/UsersDisplay';
import GoogleLoginComponent from './components/GoogleLoginComponent';
import UserInfo from './components/user-info';

export const ThemeContext  = createContext("")


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Callback function to update darkMode state
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };   

  return (
    <BrowserRouter>
        <ThemeContext.Provider value={darkMode}>
        <div style={{ backgroundColor : darkMode ? "#1a1a1a" : "", color: darkMode ? "white" : ""  }} >
        <div style={{ backgroundColor : darkMode ? "#1a1a1a" : "", color: darkMode ? "white" : ""  }} className="App">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} style={{ backgroundColor : darkMode ? "#1a1a1a" : "", color: darkMode ? "white" : ""  }}/>
          {/*<button className='border-0 bg-transparent' onClick={dartAction} >
          <i style={{ fontSize:"30px", zIndex:"4", left:34,color: darkMode ? "white" : ""   }} class="fa-solid fa-circle-half-stroke position-fixed top-50 "></i>
  </button>*/}
          <Header/>
          <About />
          <Events />
          <Organizer />
          <hr ></hr>
          <Footer />
        </div>
        </div>
        </ThemeContext.Provider>
        {/* {<UsersDisplay />} */}
        <GoogleLoginComponent />
        <Routes>
          <Route path="/user-info" element={<UserInfo />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
