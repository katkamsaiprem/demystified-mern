//create context , provide context , consume context

import { createContext, useContext, useState } from "react";


const UserContext = createContext(null);



export const UserProvider = ({ children }) => {


    const [user, setUser] = useState(null);


    const login = (userData) => {
        setUser(userData)
    }

    const logOut = () => {
        setUser(null)
    }
    return (
        <UserContext.Provider value={{ user, login, logOut }}>
            {children}
        </UserContext.Provider >
    )
}

export const useUser = () => {

    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be inside UserProvider")
    }

    return context;
}


