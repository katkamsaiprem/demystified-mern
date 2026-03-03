

/**
 * 
 * @returns take inputs from the user then store them local states
 * jsx allows us to write js inside xml
 */

import { useNavigate } from "react-router-dom";
import { appwriteAccount } from "../appwrite-serivces/AppwriteAccount";
import { useReducer } from "react";
import { Bounce, toast } from "react-toastify";
import PrimaryButton from "../components/PrimaryButton";

const RegisterUserPage = () => {

    const initialState = {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        error: null,
        isSubmitting: false,
    }

    const reducer = (state, action) => {
        switch (action.type) {

            //payload carries field name and new value
            case "SET_FIELD":
                return {
                    ...state,//copy existing keys
                    [action.field]: action.value//use [] to set variable value as key name
                };
            case "SUBMIT_START":
                return {
                    ...state,
                    isSubmitting: true,//if isSubmitting is true then show loading 
                    error: null
                }
            case "SUBMIT_SUCCESS":
                return {
                    ...initialState
                }//Reset form on success
            case "ERROR":
                return {
                    ...state,
                    isSubmitting: false,//on error occurs we need to stop loading
                    error: action.message
                }
            default:
                return state
        }



    }


    const [state, dispatch] = useReducer(reducer, initialState);


    const navigate = useNavigate()
    const registerNewUser = async (event) => {
        event.preventDefault();
        // setLoading(true);
        //setError("")//on click we need to clear user message
        if (state.password !== state.confirmpassword) {
            dispatch({ type: "ERROR", message: "Passwords do not match" });
            return;
        }
        dispatch({ type: "SUBMIT_START" });
        try {
            //send post req to appwriter to create new user

            //send user data
            console.log(state.name);
            const userData = { name: state.name, email: state.email, password: state.password };
            console.log(userData.email);
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

            dispatch({ type: "SUBMIT_SUCCESS" })
            //Redirect to login page
             navigate("/login")
        }
        catch (error) {

            console.log(error);

            dispatch({ type: "ERROR", message: error.message })
            // setError(error.message || "Failed To Register")
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
            //setLoading(false);
        }

    }

    return (<div className="min-h-screen bg-gradient-to-br from-gray-500 to-red-500 flex items-center justify-center p-4">
        <form
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-4"
            onSubmit={registerNewUser}
        >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Create Account
            </h2>
            <input
                name="name"
                type="text"
                value={state.name}
                required
                placeholder="Enter FullName"
                onChange={(e) => dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:outline-none focus-ring-2 focus:ring-purple-500" />
            <input
                name="email"
                type="email"
                required
                value={state.email}
                placeholder="Enter Email"
                onChange={(e) => dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input
                name="password"
                type="password"
                required
                value={state.password}
                placeholder="Enter password"
                onChange={(e) => dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input
                name="confirmpassword"
                type="password"
                required
                value={state.confirmpassword}
                placeholder="Confirm your password"
                onChange={(e) => dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            {/* <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50">
                {loading ? "Creating Account..." : "Register"}
            </button> */}
            <PrimaryButton disabled={state.isSubmitting ? true : false}>{state.isSubmitting ? "Registering " : "Register"}</PrimaryButton>
            {/* // */}
            <p>Already have an account?{' '}
                <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="text-purple-600 hover:underline font-semibold"
                >Login here
                </button>
            </p>
            {
                state.error && <p>Error Occured:{state.error}</p>
            }
        </form>
    </div>)
}

export default RegisterUserPage;