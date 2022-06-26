import React from 'react';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './Firebase.init';
import Loading from './Loading';

const RequireAuth = ({children}) => {
    const [user,loading,error]=useAuthState(auth);
    const location=useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(error){
        toast.error('Sorry don,t login')
    }
    if(!user){
        return  <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;