import { Link } from "react-router-dom"
import useUserStore from "../stores/useUserStore";
import { appwriteAccount } from "../appwrite-serivces/AppwriteAccount";

import { useEffect } from "react";

const HomePage = () => {
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);


    //check if the user is logged in when app loads
    useEffect(() => {
        const checkUser = async () => {
            try {
                const currentUser = await appwriteAccount.getCurrentUser();
                console.log("currrent ", currentUser);
                if (currentUser) {
                    setUser(currentUser);

                }

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
        <div className='min-h-screen bg-linear-to-br from-indigo-500 via-red-500 to-pink-500'>


            <header className='max-w-6xl mx-auto px-4 py-20 text-center text-white'>
                <h2 className='text-5xl font-bold mb-6'>
                    Welcome to your App
                </h2>
                <p className='text-xl mb-8'>

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
