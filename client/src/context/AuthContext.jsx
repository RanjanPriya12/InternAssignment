import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [isAuthorized, setIsAuthorized]=useState(false);

    const handleAuth=(state)=>{
        setIsAuthorized(state)
    }
    
    return <AuthContext.Provider value={{isAuthorized,handleAuth}}>{children}</AuthContext.Provider>
}