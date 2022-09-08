import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [isAuthorized, setIsAuthorized]=useState(false);
    const logIn=(userName,password)=>{
        if(userName && password){
            setIsAuthorized(true);
        }
    }

    const logOut=()=>{
        
            setIsAuthorized(false);
        
    }
    return <AuthContext.Provider value={{isAuthorized,logIn,logOut}}>{children}</AuthContext.Provider>
}