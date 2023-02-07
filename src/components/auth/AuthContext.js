import {createContext, useContext, useEffect, useState} from "react";
import {authState} from "./auth.service";


const AuthContext = createContext({user: null});


export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {

    const [user, setUser] = useState(null);

    useEffect(() => authState(setUser), [setUser]);

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}