import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext=createContext(
    
);

// pattern design: provider
const AuthContextProvider= ( { children } ) => {

    const [user,setUser]=useState(null);
 


  useEffect(() =>{
    const unsubscribe= auth.onAuthStateChanged( (userAuth) => {
        if( userAuth){
          /*userAuth.uid,*/ 
             //console.log(userAuth.email)
             setUser(userAuth.email)
            // userName=userAuth.email;
        }else{
            setUser(null);
        }
     })
     return  unsubscribe;
  
   },[] ) 


    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    ) 
} 

export default AuthContextProvider;

