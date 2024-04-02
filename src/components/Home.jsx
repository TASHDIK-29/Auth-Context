import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <h1>Home page of {name}</h1>
        </div>
    );
};

export default Home;