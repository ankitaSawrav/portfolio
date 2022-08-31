import '../App.css';
import { useState } from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
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
            <ul className='links' id={showLinks ? "hidden": ""}>
                <li id = "AboutMe" onClick={()=>handleSelection("aboutMe")} > About Me </li>
                <li id = "Projects" onClick={()=>handleSelection("Projects")}> Projects </li>
                <li id = "ContactMe" onClick={()=>handleSelection("ContactMe")} > ContactMe </li>
                <a id ="githubLink" href="https://github.com/ankitaSawrav" target="_blank">Github</a>
                <a id ="linkedin-link" href="https://www.linkedin.com/in/ankita-sawrav/" target="_blank">linkedin</a>
            </ul> 
            <button onClick= {handleButtonChange}><ReorderIcon/></button>
        </div>
    )
}
export default NavBar