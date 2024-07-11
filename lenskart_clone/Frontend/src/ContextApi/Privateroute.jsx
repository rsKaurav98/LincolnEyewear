import React, { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

export const Privateroutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  // Log the authentication status for debugging
  console.log("User authentication status:", isAuth);

  // Always return the children, whether the user is authenticated or not
  return children;
};