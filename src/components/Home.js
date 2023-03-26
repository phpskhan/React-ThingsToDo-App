import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tasks from './Tasks'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    let history = useNavigate();

    const handleEdit = (id , task , status) => {
            localStorage.setItem('Task',task);
            localStorage.setItem('Status',status);
            localStorage.setItem('Id',id);
    }

    const handleDelete = (id) => {
        var index = Tasks.map(function(e){
            return e.id
        }).indexOf(id);

        Tasks.splice(index,1);
        
        history('/');
    }
    return(
        <Fragment>
            <div class="container">
                <h1 className="d-grid gap-2 text-center">To-Do List App</h1><br></br>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Tasks && Tasks.length > 0
                            ?
                            Tasks.map((item) =>{
                                return (
                                    <tr>
                                        <td>{item.Task}</td>
                                        <td>{item.Status}</td>
                                        <td>
                                            <Link to={'/edit'}>
                                                <Button onClick={() => handleEdit(item.id, item.Task, item.Status)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data Available"
                        }
                    </tbody>               
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to="/create">
                    <Button size='lg'>Create New Tasks</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;