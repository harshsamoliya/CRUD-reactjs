import { React, useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-css';
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
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>S.No</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button color="green" onClick={() => {
                                            setData(data.id, data.firstName, data.lastName)
                                        }}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="Red" onClick={() => {
                                        onDelete(data.id)
                                    }}>
                                        Delete
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                <Link to='/'>
                    <Button color='yellow'> Create New Form</Button>
                </Link>
        </Table>
        </div >
    )
}
