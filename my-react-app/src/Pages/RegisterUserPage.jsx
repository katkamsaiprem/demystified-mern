

/**
 * 
 * @returns take inputs from the user then store them local states
 * jsx allows us to write js inside xml
 */

import { useNavigate } from "react-router-dom";
import { appwriteAccount } from "../appwrite/AppwriteAccount";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

const RegisterUserPage = () => {
    const [name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");// empty string is false
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate()
    const registerNewUser = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError("")//on click we need to clear user message



        try {
            //send post req to appwriter to create new user

            //send user data
            const userData = { name, email, password }
            await appwriteAccount.createUser(userData);
            toast.success('User Registered', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            //Redirect to login page
            navigate("/login")
        }
        catch (error) {

            setError(error.message || "Failed To Register")
            toast.error('Failed To Register', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        }
        finally {
            setLoading(false);
        }

    }

    return (<div className="min-h-screen bg-gradient-to-br from-gray-500 to-red-500 flex items-center justify-center p-4">
        <form
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-4"
            onSubmit={registerNewUser}
        >
            <h2 className="text-3x1 font-bold text-center text-gray-800 mb-6">
                Create Account
            </h2>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}
            <input
                type="text"
                value={name}
                required
                placeholder="Enter FullName"
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:outline-none focus-ring-2 focus:ring-purple-500" />
            <input
                type="email"
                required
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus-ring-2 focus:ring-purple-500" />
            <input
                type="password"
                required
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus-ring-2 focus:ring-purple-500" />
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50">
                {loading ? "Creating Account..." : "Register"}
            </button>
            {/* // */}
            <p>Already have an account?{' '}
                <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="text-purple-600 hover:underline font-semibold"
                >Login here
                </button>
            </p>
        </form>
    </div>)
}

export default RegisterUserPage;