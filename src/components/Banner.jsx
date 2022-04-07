import React, { useEffect, useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import HeroBanner from "../images/netflix.jpeg";
import {truncate} from '../utils/Utilidades'
import axios from  '../Api/httpCliente'
import {base_url}   from  '../constant/utils'
import requests from "../Api/Requests";
const Banner = () => {
  const classes = useStyles();
  const [movie,setMovie]=useState({});
  
 
 useEffect(()=>{

  const fetchDataAxios = async () =>{
    const request= await axios.get(requests.fetchNetflixOriginals)
    //tenemos array de peliculas request.data.results
    // generamos un numero random  entre 0 y la longitud del array,para obetener un indice aleatorio
 

   
    const random=Math.floor(Math.random()* request.data.results.length -1)
    setMovie(request.data.results[random])
    
    return request;
  }

   const getBannerFetch =() => {
    
     fetch(`${base_url}${"/"}${requests.fetchNetflixOriginals}`)
      .then((res) => res.json())
      .then( (res) =>{
        const random=Math.floor(Math.random()* res.results.length -1)
        setMovie(res.results[random])
     })
      .catch( (error) => console.log(error)  )

   }
  //fetchDataAxios();
  getBannerFetch();
  console.log(movie)

 },[] )
 
 
 
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        position: "relative",
        height: "440px",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className={classes.content}>
      <Typography variant='h2' component='h1'>
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
      
      </div>
      <div className={classes.buttons}>
           <Button>
               Play
           </Button>
           <Button>
               My List
           </Button>
      </div>
      <Typography variant="h6" className={classes.description}
        style={{ wordWrap:"break-word"}}>
          {
              truncate(movie?.overview,160)
          }
       
        </Typography>
        <div className={classes.fadeBottom}>

        </div>
        
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${HeroBanner})`,
    position: "relative",
    height: "440px;",
    objetFit: "contain" /*centrada que cubra el total del contenedor*/,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff"
  },
  buttons:{
     "& button":{
         cursor:"pointer",
         color:"#fff",
         fontWeight:700,
         borderRadius:"5px",
         padding: theme.spacing(1,4,1,4),
         marginRight:"1rem",
         backgroundColor:"rgb(51,51,51,0.5)"
     },
     "& button:hover":{
         color: "#000",
         backgroundColor:"#e6e6e6"
     }
  },
  description:{

  },
  fadeBottom:{
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
  }
}));

export default Banner;
