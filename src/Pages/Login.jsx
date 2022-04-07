import React, { useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import logo from "../images/netflix-logo.png";
import HeroBanner from "../images/HeroBanner.jpg";
import { StyledButton, StyledInput } from "../styled/styledcomponents";
import SignUp from "./SignUp";

const Login = () => {  

  
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.image} alt="logo" />
      <StyledButton className={classes.session}>Iniciar session</StyledButton>
      <div className={classes.info}>
        {!signIn ? (
          <SignUp />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Unlimited films, TV programmes and more.
            </Typography>
            <Typography variant="h5">
              Watch anywhere. Cancel at any time.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </Typography>
            <div className={classes.inputBlock}>
              <StyledInput placeholder="Email Address" />
              <StyledButton>Get started</StyledButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${HeroBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  image: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer",
  },
  info: {
    zIndex: 15,
    color: "#fff",
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
  inputBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "700px",
    marginTop: theme.spacing(4),
  },
}));

export default Login;
