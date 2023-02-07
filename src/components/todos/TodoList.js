import {useCallback, useEffect, useState} from 'react';
import {done, findAll, findAllInRealtime} from "./todo.service";
import {
    Card,
    CardContent,
    CardHeader,
    IconButton, Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
import {Refresh} from "@mui/icons-material";

function TodoList() {

    const [todos, setTodos] = useState([]);

    // const fetchTodos = useCallback(
    //     () => findAll().then(setTodos),
    //     [setTodos],
    // );
    //
    // useEffect(() => {
    //     fetchTodos().then();
    // }, [fetchTodos]);

    useEffect(() => findAllInRealtime(setTodos), []);

    return (
        <Card>
            <CardHeader title={"Liste des todos"}
                        // action={(
                        //     <IconButton onClick={fetchTodos}><Refresh/></IconButton>
                        // )}
            />

            <CardContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Id
                            </TableCell>
                            <TableCell>
                                Description
                            </TableCell>
                            <TableCell>
                                Done
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {todos.map(todo => (
                            <TableRow key={todo.id}>
                                <TableCell>
                                    {todo.id}
                                </TableCell>
                                <TableCell>
                                    {todo.description}
                                </TableCell>
                                <TableCell>
                                    <Switch
                                        checked={todo.done}
                                        onChange={(_) => done(todo.id)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default TodoList;