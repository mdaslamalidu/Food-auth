import React, { useContext } from 'react';
import Login from '../components/Login/Login';
import { AuthContext } from '../Context/UseContext';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return children;
    }

    return <Login></Login>

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;