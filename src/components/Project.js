import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider,Grid,Paper } from '@mui/material';
import './Project.css';

function Project({name,synopsis,github,imageurl,liveSite,id,techStats}){
    return(
        // <div className="project-detail" id={`project${id}`}>
        //     <h1>{name}</h1>
        //     <img className='proj-image' src={imageurl} alt={`${name}pic`}></img>
        //     <p className="proj-desc">{synopsis}</p>
        //     <p>{techStats}</p>
        //     {/* to behave like a botton on hover */}
        //     <a  className='link-Btn' href={github}>View Code Repo</a>
        //     <a className='link-Btn'href={liveSite}>Live Site</a>
        // </div>
   
        <Card sx={{ maxWidth: 345  ,
                    margin:'10px',
                    display:'Grid',
                    minHeight:500,
                    boxShadow: 8,
                    }}>

            <CardMedia
                component="img"
                alt={`${name}pic`}
                width='300'
                height='300'
                display ='cover'
                image={imageurl} 
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {synopsis}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                <span style={{fontWeight: 'bold'}}>{techStats} </span> 
                </Typography>
            </CardContent>
          
            <CardActions >
                <Button 
                    href={github}
                    size="small">View Code Repo
                </Button>
                <Button
                    href={liveSite}
                    size="small">Live Site
                </Button>
            </CardActions>
    </Card>

    )
}
export default Project