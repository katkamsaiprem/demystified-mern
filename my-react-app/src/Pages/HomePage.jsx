import { Link } from "react-router-dom"
import useUserStore from "../stores/useUserStore";
import AppwriteAccount from "../appwrite/AppwriteAccount";
import { useEffect } from "react";
const HomePage = () => {
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);

    const appwriteAccount = new AppwriteAccount();
    //check if the user is logged in when app loads
    useEffect(() => {
        const checkUser = async () => {
            try {
                const currentUser = await appwriteAccount.getCurrentUser();
                console.log("currrent ", currentUser);
                setUser(currentUser);

            }
            catch (err) {
                console.error("unable to get Current User data", err);



            }

        }
        checkUser();

    }, [])
    return (
        // <div>
        //     {/* <h1>HomePage</h1>
        //     <Link to={'profile'}>Profile</Link> */}
        // </div>
        <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-red-500 to-pink-500'>
            <nav className='bg-white shadow-lg'>
                <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-gray-800'>My Auth App</h1>

                    <div className='space-x-4'>
                        {user ? (
                            <>
                                <span className='text-gray-700'>Hello, {user.name}</span>
                                <Link
                                    to="/profile"
                                    className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
                                    Profile
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
                                    Login
                                </Link>
                                <Link
                                    to={"/register"}
                                    className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition'>
                                    Register

                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <header className='max-w-6xl mx-auto px-4 py-20 text-center text-white'>
                <h2 className='text-5xl font-bold mb-6'>
                    Welcome to your Auth App
                </h2>
                <p className='text-xl mb-8'>
                    Built with React ,Appwrite and Zustand
                </p>
                {
                    !user && (
                        <div className='space-x-4'>
                            <Link
                                to={"/register"}
                                className='inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition'>
                                Get Started</Link>
                        </div>
                    )
                }
            </header>
        </div>
    )
}
export default HomePage
