import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const sendDataToApi = () => {
        axios.post(`https://61e1b1183050a10017681f5f.mockapi.io/crud`, {
            firstName, lastName
        }).then(() => {
            navigate('/read');
        })
    }
    return (
        <div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter First Name" onChange={(e) => {
                        setFirstName(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => {
                        setLastName(e.target.value)
                    }} />
                </Form.Group>
                <Button type='submit' onClick={sendDataToApi}>Submit</Button>
            </Form>
        </div>

    )
}
