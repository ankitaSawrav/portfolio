
import './App.css';
import NavBar from './components/NavBar.js';
import AboutMe from './components/AboutMe.js';
import ContactMe from './components/ContactMe.js';
import Footer from './components/Footer.js';
import Projects from "./components/Projects.js";
import React, { useState} from 'react'

function App() {
  const [displaySection, setDisplaySection]= useState("aboutMe")
 
  console.log(displaySection,"displaySection")

  return (
    <div className='main-container'>
      <NavBar selectDisplay = {setDisplaySection}></NavBar>
      <div className='section-conatiner' style={{marginTop: "5rem"}}> 
      {displaySection==="aboutMe"? <AboutMe/>:(displaySection==="Projects"? <Projects/>:<ContactMe/>)} 
      </div>
      <footer><Footer/></footer>
      
    </div>
  );
}

export default App;
