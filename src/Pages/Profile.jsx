import { Typography, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import Header from "../components/Header";
import Plans from "../components/Plans";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";
import netflixavatar from "../images/netflixavatar.png";
import { StyledButton } from "../styled/styledcomponents";
import {useHistory} from  'react-router-dom'
const Profile = () => {
  const classes = useStyles();
  const user=useContext(AuthContext)
  const history=useHistory();

 const signOut = () =>{
     auth.signOut();
     history.push("/")

 }

  return (
    <div className={classes.root}>
   <Header/>
      <div className={classes.body}>
        <Typography variant="h3">Edit Profile</Typography>
        <div className={classes.info}>
          <img src={netflixavatar} alt="avatar" />
          <div className={classes.details}>
            <div className={classes.plans}>
              <Typography variant="h6">Email usuario {user}</Typography>
              <Typography variant="h5" gutterBottom   className={classes.plansText}>Plans</Typography>
              <Plans cost={7.99}>Netflix Standar</Plans>
              <Plans cost={11.99}>Netflix Basic</Plans>
              <Plans color="gray" cost={15.99} wide="medium">Netflix Premium</Plans>
              <StyledButton wide="fullWidth" onClick={signOut}>Sign Out</StyledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
  /* minHeight: "100vh",/*Anchura de 100*100*/ 
   /* minWidth: "100vw",/*altura de 100*100*/ 

  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "800px",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img":{
      height: "100px",
      [theme.breakpoints.down("sm")]:{
        display:"none" 
      }
    }
    },
    details:{
      width: "100%",
      marginLeft: theme.spacing(3),
      "& h6": {
        backgroundColor: "#aaa",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        fontSize: "18px",
      },   
      
    },
    plans: {
      width: "100%",
    },
    plansText: {
      borderBottom: "1px solid lightgray",
    },
}));

export default Profile;
