import React from 'react';
import {useAuth} from "./AuthContext";
import {Avatar, Button, Stack, Typography} from "@mui/material";
import {loginWithGoogle, logout} from "./auth.service";

function AuthButton() {

    const {user} = useAuth();

    return (
        <>
            {!user && (
                <Button sx={{color: "white"}} onClick={loginWithGoogle}>Se connecter</Button>
            )}
            {user && (
                <Stack direction={"row"} alignItems={"center"}>
                    <Avatar src={user.photoURL}/>
                    <Typography>
                        {user.displayName ?? user.email}
                    </Typography>
                    <Button sx={{color: "white"}} onClick={logout}>Se deconnecter</Button>
                </Stack>
            )}
        </>
    );
}

export default AuthButton;