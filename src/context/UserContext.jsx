import { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

export const useUser = () => {
    return useContext(UserContext);
}

const UserProvider = ({ children }) => {

    const [user, setUser] = useState("");
    
    return(
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;