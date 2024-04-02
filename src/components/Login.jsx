import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    
    const {signInUser, signInWithGoogle, user} = useContext(AuthContext)
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

   
    useEffect( () =>{
        if(user){
            navigate(location.state);
        }
    }, [user])

    const handelLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        // sign in user
        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handelGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col w-1/2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-2/3 shadow-2xl bg-base-100 text-center">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="mb-6">New in this Website? please <Link className="text-purple-700 underline" to='/register'>Register</Link></p>
                    <div>
                        <button onClick={handelGoogleSignIn}>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;