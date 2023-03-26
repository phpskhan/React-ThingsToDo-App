import React, {useEffect, useState} from "react"
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tasks from './Tasks'
import { useNavigate } from 'react-router-dom'

function Edit(){

    const [task, setTask] = useState('');
    const [status, setStatus] = useState('');
    const [id, setId] = useState('');
    
    let history = useNavigate();

    var index = Tasks.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e) => {
        e.preventDefault();

        let a = Tasks[index];
        a.Task = task;
        a.Status = status;

        history("/");
    }

    useEffect(() => {
        setTask(localStorage.getItem('Task'))
        setStatus(localStorage.getItem('Status'))
        setId(localStorage.getItem('Id'))
    },[])
    
    return <div>

        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formTask">
                <Form.Control type="text" placeholder="Add Task" value={task} required onChange={(e) =>setTask(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStatus">
                <Form.Control type="text" placeholder={status} value={status} required onChange={(e) =>setStatus(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
    </div>
}

export default Edit;