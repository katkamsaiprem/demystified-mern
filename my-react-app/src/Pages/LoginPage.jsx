import { useNavigate } from "react-router-dom";

import useUserStore from "../stores/useUserStore";
import { appwriteAccount } from "../appwrite/AppwriteAccount";
import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();




    const LoginUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            try {
                const existingUserData = await appwriteAccount.getCurrentUser();
                //if no existingUserSession ,then it throws error exception
                if (existingUserSession) {
                    //if user closes the index.html or refreshes the pages, store data get cleared but user login session data still present in cookies,
                    //but when you goes to homepage ,zustand says no user data, but appwrite says "you already logged in "
                    setUser(existingUserData)
                    navigate("/")
                    return

                }
            }
            catch (error) {
                //contine to create new session
            }

            //Log in To Appwrite
            const logInData = { email, password }
            await appwriteAccount.loginWithEmailAndPassword(logInData)

            //Get user details
            const currentUser = await appwriteAccount.getCurrentUser();

            //Save to Zustand store
            setUser(currentUser);

            console.log("Logged in:", currentUser);

            //Redirect to home
            navigate("/");
        }
        catch (error) {
            console.error(error);
            setError(error.message || "Failed to login")
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center p-4">
            <form
                className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-4"
                onSubmit={LoginUser}>
                <h2
                    className="text-3xl font-bold text-center text-gray-800 mb-6"
                >Welcome Back</h2>

                {error && ( //error is true then renders what comes after &&
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                )}
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50" type="submmit" disabled={loading} >{loading ? "Logging in..." : "Login"}</button>
                <p>Don't have an account?{' '}
                    <button
                        className='text-blue-600 hover:underline font-semibold'
                        type="button"
                        onClick={() => navigate("/register")}>
                        Register here
                    </button>
                </p>
            </form>
        </div>
    )
}

export default LoginPage;