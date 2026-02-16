
import { Link } from "react-router-dom";
import useUserStore from "../stores/useUserStore";
import { useEffect } from "react";

const NavBar = () => {
    const CurrentUser = useUserStore((state) => state.user);



    return (
        <nav className='bg-white shadow-lg'>
            <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-gray-800'>My Auth App</h1>

                <div className='space-x-4'>
                    {CurrentUser ? (
                        <>
                            <span className='text-gray-700'>Hello, {CurrentUser.name}</span>
                            <Link
                                to="/profile"
                                className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
                                Profile
                            </Link>
                            {((CurrentUser?.$id && CurrentUser?.labels?.includes("admin")) && <Link to={"/admin-dashboard"} className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition">My Dashboard</Link>)}
                        </>
                        //$id present only in appwrite
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
    )
}
export default NavBar;