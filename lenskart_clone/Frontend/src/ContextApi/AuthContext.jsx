import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [Authdata, setAuthData] = useState();

  console.log(`is Auth `, isAuth);
  console.log( `is Auth data ` ,Authdata);
  if(localStorage.getItem("res") && !isAuth){
    var res1=JSON.parse(localStorage.getItem("res"));
    setisAuth(true);
    setAuthData(res1);
  }
  return (
    <AuthContext.Provider value={{ isAuth, setisAuth, Authdata, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
