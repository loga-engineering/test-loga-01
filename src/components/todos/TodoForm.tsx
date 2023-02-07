import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";

import {create} from "./todo.service";

export default function TodoForm() {

    const [description, setDescription] = useState<string>("");

    const handleSubmit = async () => {
        await create(description);
        setDescription("");
    }

    return (
        <Card>
            <CardHeader title={"Nouveau Todo"}/>

            <CardContent>
                <TextField
                    fullWidth
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </CardContent>

            <CardActions sx={{justifyContent: "end", p: 2}}>
                <Button variant={"contained"} onClick={handleSubmit} disabled={!description}>
                    {"Créer"}
                </Button>
            </CardActions>
        </Card>
    );
}
