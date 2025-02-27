import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({user, children}) => {
    const location = useLocation();
    if(!user){
        return(
            <Navigate to='/Iniciar' state={{from: location}} replace/>
        );
    }
    return children;
};

export default ProtectedRoute;