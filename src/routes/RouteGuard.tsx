import React from "react";
import { Navigate } from "react-router-dom";

const RouteGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem("authToken");
    return isAuthenticated ? <>{children}</> : <Navigate to="/signin" />;
};

export default RouteGuard;
