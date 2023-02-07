import React from 'react';
import {AppBar, Button, Container, Stack, Toolbar} from "@mui/material";
import AuthButton from "./auth/AuthButton";

export default function MyAppBar() {
    return (
        <AppBar>
            <Toolbar>
                <Container>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Button sx={{color: "white"}}>
                            {"Acceuil"}
                        </Button>

                        <AuthButton/>
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

