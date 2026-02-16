import { useNavigate } from "react-router-dom";
import { appwriteAccount } from "../appwrite-serivces/AppwriteAccount"
import useUserStore from "../stores/useUserStore";
import { useEffect } from "react";
import { Bounce, toast } from "react-toastify";

const Profile = () => {

    //zustand store properties
    const user = useUserStore((state) => state.user)
    const clearUser = useUserStore((state) => state.clearUser)
    const setUser = useUserStore((state) => state.setUser)


    const navigate = useNavigate();

    useEffect(() => {
        const getUserData = async () => {
            //if page refresh then store data gets cleared, so lets get data from appwrite
            if (!user) { // Only fetch if user doesn't exist
                try {
                    const existingUserData = await appwriteAccount.getCurrentUser();
                    if (existingUserData) {
                        setUser(existingUserData);
                    }
                } catch (error) {
                    console.log("Failed to get user data:", error);
                    navigate("/login");
                }
            }
        };

        getUserData();
    }, []);




    const handleLogout = async () => {
        try {
            await appwriteAccount.logoutUser();
            clearUser();
            navigate("/login")
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

        }
        catch (error) {
            console.log("Logout error:", error);
            toast.error('Failed to login', {
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

    }
    if (!user) {
        return (
            <div>
                <div>
                    <p>please login to view profile</p>
                    <button onClick={() => navigate("/login")}>
                        Go to Login
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gray-100 py-12 px-4'>
            <div className='max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8'>
                <h1 className='text-3xl font-bold mb-6 text-gray-800'>Profile</h1>

                <div className='space-y-4 mb-8'>
                    <div className='border-b pb-4'>
                        <p className='text-sm text-gray-600'>Name</p>
                        <p className='text-xl font-semibold'>{user.name}</p>
                    </div>

                    <div className='border-b pb-4'>
                        <p className='text-sm text-gray-600'>Email</p>
                        <p className='text-xl font-semibold'>{user.email}</p>
                    </div>

                    <div className='border-b pb-4'>
                        <p className='text-sm text-gray-600'>User ID</p>
                        <p className='text-sm font-mono bg-gray-100 p-2 rounded'>{user.$id}</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className='w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition'>
                    Logout

                </button>
            </div>

        </div>

    )
}
export default Profile;