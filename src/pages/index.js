import {Box, Container, CssBaseline, Stack} from "@mui/material";
import MyAppBar from "../components/MyAppBar";
import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";

export default function Home() {
    return (
        <Box>
            <CssBaseline/>

            <MyAppBar/>

            <Container sx={{mt: 15}}>
                <Stack spacing={3}>
                    <TodoForm/>
                    <TodoList/>
                </Stack>
            </Container>
        </Box>
    )
}
