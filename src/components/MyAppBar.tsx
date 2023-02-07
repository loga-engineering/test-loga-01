import React from 'react';
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

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

