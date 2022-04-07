import React, { useState,useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { StyledButton, StyledInput } from "../styled/styledcomponents";
import { auth } from "../firebase";

const SignUp = () => {

  const classes = useStyles();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => console.log(authUser))      
      .catch((err) => alert(err.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) =>{
        console.log(authUser)

      } )
      .catch((err) => alert(err.message));
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Sign In
      </Typography>

      <form className={classes.form}>
        <StyledInput placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
         className={classes.email} />
        <StyledInput 
         placeholder="Password"
          value={password}
          type="password"
         onChange={(e) => setPassword(e.target.value)}
        className={classes.password} />
        <StyledButton type="submit"
         wide="medium" 
         radius='true'
         onClick={signIn}>
          SignIn
        </StyledButton>
        <Typography variant='subtitle2'>
          New to Netflix ?{"  "}
          <span className={classes.signupLink} onClick={register} >
            Sign Up now.{" "}
          </span>
        </Typography>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& h5": {
      marginTop: theme.spacing(2),
      width: "70%",
    },
  },
  email:{
    marginBottom:theme.spacing(2)/*2 => 16px  */ 
  },
  password:{
    marginBottom:theme.spacing(4)
  },
  form:{
    width: "80%",

  },
  signupLink:{
     color: "#fff",
     cursor:"pointer",
     "&:hover":{
      textDecoration: "underline",
     }
  }

}));

export default SignUp;
