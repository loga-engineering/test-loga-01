import {useEffect, useState} from 'react';

import {User} from "firebase/auth";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {Todo} from "./todo.model";
import {useAuth} from "../auth/AuthContext";
import {toggleDone, findAllInRealtime, findNotDoneInRealtime} from "./todo.service";

export default function TodoList() {

    const {user} = useAuth();
    const [todos, setTodos] = useState<Todo[]>([]);
    const [showAll, setShowAll] = useState<boolean>(false);

    useEffect(() => {
        return showAll ? findAllInRealtime(setTodos) : findNotDoneInRealtime(setTodos);
    }, [showAll]);

    return (
        <Card>
            <CardHeader
                title={"Liste des todos"}
                action={(
                    //     <IconButton onClick={fetchTodos}><Refresh/></IconButton>
                    <FormControlLabel
                        label={"Afficher tous"}
                        control={<Switch checked={showAll} onChange={(e) => setShowAll(e.target.checked)}/>}
                    />
                )}
            />

            <CardContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {"Id"}
                            </TableCell>
                            <TableCell>
                                {"Description"}
                            </TableCell>
                            <TableCell>
                                {"Done"}
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {todos.map(todo => <TodoItemRow key={todo.id} todo={todo} user={user}/>)}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}


type TodoItemRowProps = {
    todo: Todo, user: User
}

function TodoItemRow({todo, user}: TodoItemRowProps) {
    return (
        <TableRow>
            <TableCell>
                {todo.id}
            </TableCell>
            <TableCell>
                {todo.description}
            </TableCell>
            <TableCell>
                <Switch
                    checked={todo.done}
                    onChange={(e) => toggleDone(todo.id, e.target.checked, user)}
                />
            </TableCell>
        </TableRow>
    )
}
