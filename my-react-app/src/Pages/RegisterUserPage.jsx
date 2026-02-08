

/**
 * 
 * @returns take inputs from the user then store them local states
 * jsx allows us to write js inside xml
 */

import { useNavigate } from "react-router-dom";
import AppwriteAccount from "../appwrite/AppwriteAccount";
import { useState } from "react";

const RegisterUserPage = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    //create appwrite obj to access its functions
    const appwriteAccount = new AppwriteAccount();
    const navigate = useNavigate()
    const registerNewUser = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError("")



        try {
            //send post req to appwriter to creat new user

            //send user data
            const userData = { fullName, email, password }
            const response = await appwriteAccount.createUser(userData);
            console.log("User Created:-", response);

            //Redirect to login page
            navigate("/login")
        }
        catch (error) {
            console.error("Registration error", error);
            setError(error.message || "Failed To Register")

        }
        finally {
            setLoading(false);
        }

    }

    return (<div>
        <form onSubmit={registerNewUser}>
            <input type="text" value={fullName} required placeholder="Enter FullName" onChange={(e) => setFullName(e.target.value)} />
            <input type="email" required value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" required value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>)
}

export default RegisterUserPage;