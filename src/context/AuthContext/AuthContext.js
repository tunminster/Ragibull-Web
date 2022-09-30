
import React, { useState } from "react"
const initialValues={
    isLoggedIn:false,
    setLoggedIn:()=>{},
    userDetails:{},
    setUserDetails:()=>{}
}


const AuthContext = React.createContext({initialValues}) 
export const useAuthContext=()=>React.useContext(AuthContext)


export const AuthProvider=({children})=>{
    

const [isLoggedIn, setLoggedIn] = useState(false) 
const [userDetails, setUserDetails] = useState(null) 

const doLogin=(value)=>{
    console.log({value});
    setLoggedIn(value)
}

const setUserData=(value)=>{
    setUserDetails(value)
}

const data={
    isLoggedIn,
    doLogin,
    userDetails,
    setUserData
}

return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
