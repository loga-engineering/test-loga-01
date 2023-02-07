import React, {useState} from 'react';
import {Button, Card, Stack, TextField, Typography} from "@mui/material";
import {create} from "./todo.service";

function TodoForm() {

    const [description, setDescription] = useState("");

    const handleSubmit = async () => {
        await create(description);
        setDescription("");
    }

    return (
        <Card sx={{
            p: 3
        }}>
            <Typography variant={"h3"} gutterBottom>
                {"Nouveau Todo"}
            </Typography>
            <Stack spacing={3}>
                <TextField
                    fullWidth
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <Button variant={"contained"} onClick={handleSubmit} disabled={!description}>
                    Créer
                </Button>
            </Stack>
        </Card>
    );
}

export default TodoForm;