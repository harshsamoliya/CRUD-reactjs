import { React, useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiDate] = useState([]);
    useEffect(() => {
        axios.get(`https://61e1b1183050a10017681f5f.mockapi.io/crud`).then((getData) => {
            setApiDate(getData.data);
        })
    }, [])
    const setData = (id, firstName, lastName) => {
        localStorage.setItem('ID', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
    }
    const getData = () => {
        axios.get(`https://61e1b1183050a10017681f5f.mockapi.io/crud`).then((getData) => {
            setApiDate(getData.data);
        })
    }
    const onDelete = (id) => {
        axios.delete(`https://61e1b1183050a10017681f5f.mockapi.io/crud/${id}`).then(() => {
            getData();
        })
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map((data) => {
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>
                                    <Link to='/update'>
                                        <Button color="green" onClick={() => {
                                            setData(data.id, data.firstName, data.lastName)
                                        }}>
                                            Update
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button color="Red" onClick={() => {
                                        onDelete(data.id)
                                    }}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <Link to='/'>
                    <Button> Create New Form</Button>
                </Link>
            </Table>
        </div >
    )
}
