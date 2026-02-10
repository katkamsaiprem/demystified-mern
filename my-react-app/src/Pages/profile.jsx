import { useNavigate } from "react-router-dom";
import AppwriteAccount from "../appwrite/AppwriteAccount"
import useUserStore from "../stores/useUserStore";

const Profile = () => {

    const user = useUserStore((state) => state.user)
    const clearUser = useUserStore((state) => state.clearUser)
    const appwriteAccount = new AppwriteAccount();

    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            await appwriteAccount.logoutUser();
            clearUser();
            navigate("/login")

        }
        catch (error) {
            console.log("Logout error:", error);

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