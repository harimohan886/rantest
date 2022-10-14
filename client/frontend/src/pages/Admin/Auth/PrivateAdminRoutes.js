import React, { useContext } from 'react';
import { AuthContext } from '../../../context/admin/AuthContext';
import { Outlet } from "react-router";
import { Navigate } from 'react-router-dom';


export default function PrivateAdminRoute() {


    const { accessToken, user } = useContext(AuthContext);



    return user ? <Outlet /> : <Navigate replace to="/admin/login" />


}