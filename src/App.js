import { makeStyles } from "@material-ui/core"; 
import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { auth } from "./firebase";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

function App() {

  const classes=useStyles();
  //const user="jsagudelo"
  const user=useContext(AuthContext) 
 console.log("datos user:"+ user);

  return (
 
    <div className={classes.root}>
 

      { /*
      
      
      */ }
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

const useStyles=makeStyles( (theme) =>({
  root:{
    background: "#111",
    minHeight: "100vh",
    
  },
}))


export default App;
