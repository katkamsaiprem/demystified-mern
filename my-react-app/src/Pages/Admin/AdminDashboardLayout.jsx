import { Link, Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {

    return (
        <div className="w-screen h-screen flex items-center gap-6 bg-teal-50 p-6">
            <div className="bg-red-300 rounded-lg w-[20%] h-full">
                <div className="flex items-center gap-3 p-5">
                    <img className="object-contain h-[50px] rounded-1xl" src="/redlogo.webp" alt="not found" />
                    <p className="text-xl text-black font-semibold">StudentTribe Dashboard</p>

                </div>
                <nav className="flex flex-col p-6 gap-8">
                    <Link to={"/admin-dashboard/courses"}>Courses</Link>
                    <Link to={"/admin-dashboard/quizes"}>Quizes</Link>
                    <Link to={"/admin-dashboard/transactions"}>Transactions</Link>
                </nav>

            </div>

            <div className="w-[80%] h-full bg-blue-300 rounded-2xl p-2">
                <Outlet />
            </div>

        </div>
    )
}
export default AdminDashboardLayout;