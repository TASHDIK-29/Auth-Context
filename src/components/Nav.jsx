import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Nav = () => {

    const { logOut, user } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/orders'>Orders</NavLink></li>
        {user && <>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Context-API</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}

                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handelLogOut} className="btn">Log Out</button>
                    </>
                        :
                        <button className="btn"><Link to='/login'>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Nav;