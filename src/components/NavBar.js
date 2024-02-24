import '../App.css';
import { useState } from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function NavBar ({selectDisplay}) {
    const [showLinks,setShowLinks] =  useState(false)

    const handleSelection = (value)=>{
        selectDisplay(value)
        console.log(selectDisplay,"selectDisplay")
        setShowLinks(!showLinks)
    }
    const handleButtonChange = ()=>{
        setShowLinks(!showLinks)
    }
    
    return (
        <div className='navBar'>
            <div className='leftside'>
                <h1 className='logo'>as</h1>
                
            </div>
            <div className='rightside'>
            <ul className='links' id={showLinks ? "hidden": ""}>
                <li id = "AboutMe" onClick={()=>handleSelection("aboutMe")} > About</li>
                <li id = "Projects" onClick={()=>handleSelection("Projects")}> Projects </li>
                <li id = "ContactMe" onClick={()=>handleSelection("ContactMe")} > Contact </li>
                {/* eslint-disable-next-line */}
                <a id ="githubLink" href="https://github.com/ankitaSawrav" target="_blank"><GitHubIcon/></a>
                {/* eslint-disable-next-line */}
                <a id ="linkedin-link" href="https://www.linkedin.com/in/ankita-sawrav/" target="_blank"><LinkedInIcon/></a>
            </ul> 
            <button onClick= {handleButtonChange}><ReorderIcon/></button>
            </div>
        </div>
    )
}
export default NavBar