import {User} from "@firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";

import {authState} from "./auth.service";


export type AuthContextData = {
    user?: User,
}

const AuthContext = createContext<AuthContextData>({user: null});


export const useAuth = (): AuthContextData => useContext(AuthContext);

export function AuthProvider({children}) {

    const [user, setUser] = useState(null);

    useEffect(() => authState(setUser), [setUser]);

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}