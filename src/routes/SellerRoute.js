import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useIsSeller from '../hooks/useIsSeller';
import Spinner from '../shared/spiner/Spiner';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    const [isSeller , isSellerLoading] = useIsSeller(user?.email)
    console.log(isSeller)

    if(loading || isSellerLoading){
        return <Spinner></Spinner>
    }

    if (user && isSeller){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SellerRoute;