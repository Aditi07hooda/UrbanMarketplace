// import React from 'react'
// import { useSelector } from "react-redux";
// import {  Route ,Routes,Navigate,useLocation } from "react-router-dom";
// // import { Redirect } from "react-router";
// const ProtectedRoute = (isAdmin ,) => {
    
//     const { loading,isAuthenticated,user } = useSelector((state) => state.user);
//     console.log(user);
//     let location = useLocation();
//     if (loading) {
//       return null; // You might want to display a loading spinner here
//     }
  

//     if(isAuthenticated===false) {
//         return <Navigate to="/login" state={{ from: location}} replace />
//     }
   
//     if (isAdmin=== true && user.role !== 'admin') {
//       return <Navigate to="/login" />;
//     }
  
//     return <Profile/>;
//   };
  
//   export default ProtectedRoute;

// extra code to understand 
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   if (loading) {
//     return null; // You might want to display a loading spinner here
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (isAdmin && user.role !== 'admin') {
//     return <Navigate to="/login" />;
//   }

//   return <Component {...rest} />;
// };

// export default ProtectedRoute;


import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin,  children }) => {
  const navigate = useNavigate();
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return null; // You might want to display a loading spinner here
  }

  if (isAuthenticated===false) {
    navigate("/login");
    return null;
  }

  if (isAdmin===true && user.role !== "admin") {
    navigate("/login");
    return null;
  }
  return children;

 
};

export default ProtectedRoute;
