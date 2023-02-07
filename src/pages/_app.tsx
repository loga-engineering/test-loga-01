import CssBaseline from "@mui/material/CssBaseline";
import {AuthProvider} from "../components/auth/AuthContext";
import MyAppBar from "../components/MyAppBar";

export default function MyApp({Component, pageProps}) {
    return (
        <AuthProvider>
            <CssBaseline/>

            <MyAppBar/>

            <Component {...pageProps} />
        </AuthProvider>
    )
}


