import {useRef, useState} from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";

import {useAuth} from "./AuthContext";
import {loginWithGoogle, logout} from "./auth.service";
import ExitToApp from "@mui/icons-material/ExitToApp";


export default function AuthButton() {

    const {user} = useAuth();
    const ref = useRef(null);
    const [open, setOpen] = useState(false);

    return (
        <>
            {!user && (
                <Button variant={"outlined"} sx={{color: "white"}} onClick={loginWithGoogle}>Se connecter</Button>
            )}

            {user && (
                <>
                    <IconButton onClick={() => setOpen(true)}>
                        <Avatar ref={ref} src={user.photoURL}/>
                    </IconButton>

                    <Menu
                        open={open}
                        anchorEl={ref.current}
                        onClose={() => setOpen(false)}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        <Typography sx={{p: 2}}>
                            {user.displayName ?? user.email}
                        </Typography>

                        <Divider/>

                        <ListItemButton onClick={logout}>
                            <ListItemIcon>
                                <ExitToApp/>
                            </ListItemIcon>
                            <ListItemText>{"Se deconnecter"}</ListItemText>
                        </ListItemButton>
                    </Menu>
                </>
            )}

        </>
    );
}

