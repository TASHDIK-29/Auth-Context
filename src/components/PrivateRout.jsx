import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRout = ({children}) => {

    const location = useLocation();
    console.log(location)

    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location.pathname}></Navigate>;
};

export default PrivateRout;

PrivateRout.propTypes={
    children : PropTypes.node
}