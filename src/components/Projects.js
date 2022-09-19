import Project from './Project.js'
// import {Grid} from '@mui/material'
import './Project.css';

function Projects () {
    const projectsData = [
        {
            name: "Wordle",
            synopsis: "An implementation of the classic Wordle",
            imageurl:"../images/wordle.png",
            // imageurl:"images/wordle.png",
            github:"https://github.com/ankitaSawrav/ga-wordle-project",
            liveSite: "https://ankitasawrav.github.io/ga-wordle-project/wordle.html",
            techStats:'Vanilla Javascript | CSS | HTML'
        },
        {
            name: "Notely",
            synopsis: "A simple note taking app for developers and tech people to save and share notes",
            imageurl:"../images/notely.png",
            github:"https://github.com/ankitaSawrav/notely-note-taking",
            liveSite: "https://lit-brushlands-78819.herokuapp.com/",
            techStats:'Python | Javascript | CSS | HTML | Flask | Jinja | PostgreSQL'
        },
        {
            name: "Plantr",
            synopsis: "A Plant Buddy app to help you take care of your plants made with lots of love from Magdelina,Ellanor and me. Its a single page app designed for users to search the plants and add them to their green house and look at the care details.It displays current weather detail for user",
            imageurl:"../images/plantr.png",
            github:"https://github.com/magdalenamae/plantr",
            liveSite: "https://plntr.herokuapp.com/",
            techStats:'Express | Node.js | PostgreSQL | Rest API'
        },
        {
            name: "Yaadein..",
            synopsis: "Yaadein is a memory journal where you can capture your special moments forever. This is a single page react application.",
            imageurl:"../images/yaadein.png",
            github:"https://github.com/ankitaSawrav/memoriesapp",
            liveSite: "https://sheltered-reef-25477.herokuapp.com/",
            techStats:'React | PostgreSQL | CSS | Cloudinary'
        },

    ]
    return (
        <div className="Projects-container">
            <div className="page-title">
                <h1>Projects</h1>
            </div>
            <div className='check'>

                { projectsData.map((project, index) =>{
                    console.log(project,"project")
                        return (
                        
                            <Project  
                                name = {project.name}
                                synopsis = {project.synopsis}
                                github = {project.github}
                                imageurl = {project.imageurl}
                                liveSite = {project.liveSite}
                                techStats = {project.techStats}
                                key = {index}
                                id={index}
                            ></Project>

                   
                        )
            })}
   
{/* 
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                  
                    >
                         <Grid item xs={6} >
                         <Project  
                                name = "Wordle"
                                synopsis = "A Plant Buddy app to help you take care of your plants made with lots of love from Magdelina,Ellanor and me. Its a single page app designed for users to search the plants and add them to their green house and look at the care details.It displays current weather detail for user"
                                github ="https://github.com/ankitaSawrav/notely-note-taking"
                                imageurl = "../images/wordle.png"
                                liveSite = "https://github.com/ankitaSawrav/notely-note-taking"
                                techStats = 'Express | Node.js | PostgreSQL | Rest API'
                                // key = {index}
                                // id={index}
                            ></Project>
                         </Grid>
                         <Grid item xs={6}>
                         <Project  
                                name = "Wordle"
                                synopsis = "A Plant Buddy app to help you take care of your plants made with lots of love from Magdelina,Ellanor and me. Its a single page app designed for users to search the plants and add them to their green house and look at the care details.It displays current weather detail for user"
                                github ="https://github.com/ankitaSawrav/notely-note-taking"
                                imageurl = "../images/wordle.png"
                                liveSite = "https://github.com/ankitaSawrav/notely-note-taking"
                                techStats = 'Express | Node.js | PostgreSQL | Rest API'
                                // key = {index}
                                // id={index}
                            ></Project>
                         </Grid>
                         <Grid item xs={6} >
                         <Project  
                                name = "Wordle"
                                synopsis = "A Plant Buddy app to help you take care of your plants made with lots of love from Magdelina,Ellanor and me. Its a single page app designed for users to search the plants and add them to their green house and look at the care details.It displays current weather detail for user"
                                github ="https://github.com/ankitaSawrav/notely-note-taking"
                                imageurl = "../images/wordle.png"
                                liveSite = "https://github.com/ankitaSawrav/notely-note-taking"
                                techStats = 'Express | Node.js | PostgreSQL | Rest API'
                                // key = {index}
                                // id={index}
                            ></Project>
                         </Grid>
                         <Grid item xs={6}>
                         <Project  
                                name = "Wordle"
                                synopsis = "A Plant Buddy app to help you take care of your plants made with lots of love from Magdelina,Ellanor and me. Its a single page app designed for users to search the plants and add them to their green house and look at the care details.It displays current weather detail for user"
                                github ="https://github.com/ankitaSawrav/notely-note-taking"
                                imageurl = "../images/wordle.png"
                                liveSite = "https://github.com/ankitaSawrav/notely-note-taking"
                                techStats = 'Express | Node.js | PostgreSQL | Rest API'
                                // key = {index}
                                // id={index}
                            ></Project>
                         </Grid>


                    </Grid> */}

            </div>
        
        </div>

    )
}
export default Projects 
