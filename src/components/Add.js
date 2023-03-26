import React, {useState} from "react"
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tasks from './Tasks'
import { v4 as uuid } from "uuid"
import { useNavigate } from 'react-router-dom'

function Add(){

    const [Task, setTask] = useState('');
    const [Status, setStatus] = useState('Incomplete');

    let history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = Task,
        b = Status;

        Tasks.push({id: uniqueId, Task : a, Status : b});

        history("/");
    }
    
    return <div class="container">

        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <h1 className="d-grid gap-2 text-center">To-Do List App</h1><br></br>

            <Form.Group className="mb-3" controlId="formTask">
                <Form.Control type="text" placeholder="Add Task" required onChange={(e) =>setTask(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formType">
                <Form.Control type="text" placeholder="Incomplete" disabled onChange={(e) =>setStatus(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
}

export default Add;