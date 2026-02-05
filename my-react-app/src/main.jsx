
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './Pages/HomePage.jsx'
import Profile from './Pages/profile.jsx'
import './index.css'
import App from './App.jsx'

/*
react-router-dom is a library
--
 */
//step 1 :- import createBrowserRouter function ,it is used to find all routes in app and how they connect to components ,it uses browsers histroyApi to manage navigation between pages
const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'profile',
                Component: Profile
            }
        ]
    }//"/ " is index or homepage of app, the path renders element value that is component,this obj setup allows us to create multiple pages with 
    //with different route name easly 


])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
    //  <App />

)
