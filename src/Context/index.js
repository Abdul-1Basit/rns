import React from "react"
export const UserContext=React.createContext()
export const UserProvider=props=>{
  const [userData,setUserData]=React.useState({
    address:[],
    amount:'',
    fee:'',
    balance:100.9999999
  
  })
  React.useEffect(()=>{
    //console.log(JSON.stringify(userData))
    },[userData])
      return(
        
        <UserContext.Provider value={[userData,setUserData]}> 
    
        {
    props.children
    
        }
        
        </UserContext.Provider>
      )
    }
