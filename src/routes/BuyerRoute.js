import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useIsBuyer from '../hooks/useIsBuyer';
import Spinner from '../shared/spiner/Spiner';

const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    const [IsBuyer, isBuyerLoading] = useIsBuyer(user?.email)

    if(loading || isBuyerLoading){
        return <Spinner></Spinner>
    }

    if (user || IsBuyer){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default BuyerRoute;