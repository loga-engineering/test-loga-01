import React from 'react';
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoIndex() {
    return (
        <Container sx={{mt: 15}}>
            <Stack spacing={3}>
                <TodoForm/>
                <TodoList/>
            </Stack>
        </Container>
    );
}
