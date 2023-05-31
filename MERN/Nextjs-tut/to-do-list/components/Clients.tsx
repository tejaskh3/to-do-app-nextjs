"use client";
import Link from "next/link";
import { useState,createContext } from "react";
import { useContext } from "react";
const Context = createContext({user:{}});

export const ContextProvider = ({children}) =>{
  const [user, setUser] = useState({});

  return (<Context.Provider
  value={{
    user, setUser
  }}>
    {children}
  </Context.Provider>)
}
export const LogoutButton = () =>{
  const logoutHandler = ()=>{
    alert("if i got locked away")
  }
  const {user} = useContext(Context  )
  return (
  <>
{
  user.id?
  <button className='btn' onClick={logoutHandler}>Logout</button>: <Link href={'/login'}>Login</Link>
}
</>
)
}
