
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify';
import Profile from './Pages/profile.jsx'
import './index.css'
import App from './App.jsx'
import RegisterUserPage from './pages/RegisterUserPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './Pages/HomePage.jsx';
import TodoApp from './components/TodoApp.jsx';
import MyDashboardLayout from './pages/Admin/AdminDashboardLayout.jsx';

import OverViewPage from './pages/Admin/overViewPage.jsx';
import AdminCoursesPage from './pages/Admin/AdminCoursesPage.jsx';
import AdminQuizesPage from './pages/Admin/AdminQuizesPage.jsx';
import AdminTransationsPage from './pages/Admin/AdminTransationsPage.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CounterPage from './pages/CounterPage.jsx';
import { UserProvider } from './stores/UserContext.jsx';

/*
react-router-dom is a library
--
 */
//step 1 :- import createBrowserRouter function ,it is used to find all routes in app and how they connect to components ,it uses browsers histroyApi to manage navigation between pages
// const router = createBrowserRouter([
//     {
//         path: "/",
//         Component: App,
//         children: [
//             {
//                 index: true,
//                 Component: HomePage
//             },
//             {
//                 path: 'profile',
//                 Component: Profile
//             }
//         ]
//     }//"/ " is index or homepage of app, the path renders element value that is component,this obj setup allows us to create multiple pages with 
//     //with different route name easly 


// ])

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,//data stays fresh for 5 mins
            gcTime: 1000 * 60 * 5,//keep unused data in cache for 10 mins
            refetchOnWindowFocus: false,//dont refetch when user returns to tab
        }
    }
})

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />

            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "todo",
                element: <TodoApp />
            },
            {
                path: "counter",
                element: <CounterPage />
            },
        ]

    },
    {
        path: "/register",
        element: <RegisterUserPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/admin-dashboard",
        element: <MyDashboardLayout />,
        children: [
            {
                index: true,
                element: <OverViewPage />
            },
            {
                path: "courses",
                element: <AdminCoursesPage />
            },
            {
                path: "quizes",
                element: <AdminQuizesPage />
            },
            {
                path: "transactions",
                element: <AdminTransationsPage />
            }

        ]
    }



])

createRoot(document.getElementById('root')).render(
    <>
        {/* by wrapping with queryClientProvider we are all componets to get access to cache ,all comp can access tanstack query*/}
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <RouterProvider router={router} />
            </UserProvider>

            <ReactQueryDevtools />
            <ToastContainer />

        </QueryClientProvider>

    </>

    //  <App />

)
