import { React, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);
    let navigate = useNavigate();

    const sendDataToApi = () => {
        axios.put(`https://61e1b1183050a10017681f5f.mockapi.io/crud/${ID}`, {
            firstName,
            lastName
        }).then(() => {
            navigate('/read');
        })
    }
    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('ID'));
    }, [])
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Update First Name</Form.Label>
                    <Form.Control type='email' value={firstName} placeholder="Update First Name" onChange={(e) => {
                        setFirstName(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Update Last Name</Form.Label>
                    <Form.Control type='text' value={lastName} placeholder="Update Last Name" onChange={(e) => {
                        setLastName(e.target.value)
                    }} />
                </Form.Group>
                <Button type='submit' onClick={sendDataToApi}>Update</Button>
            </Form>
        </div>
    )
}
