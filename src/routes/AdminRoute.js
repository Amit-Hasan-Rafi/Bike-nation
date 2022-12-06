import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useIsAdmin from '../hooks/useIsAdmin';
import Spinner from '../shared/spiner/Spiner';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    const [isAdmin , isAdminLoading] = useIsAdmin(user?.email)
    console.log(user?.email)
    console.log(isAdmin)

    if(loading || isAdminLoading){
        return <Spinner></Spinner>
    }

    if (user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;