import {React,useState} from 'react';
import {Form ,Button} from 'semantic-ui-css';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Create() {
    let navigate = useNavigate();
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    const sendDataToApi = ()=>{
        axios.post(`https://61e1b1183050a10017681f5f.mockapi.io/crud`,{
            firstName,lastName
        }).then(()=>{
            navigate('/read');
        })
    }
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name = 'fname' onChange={(e)=>{
                        setFirstName(e.target.value)
                    }} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name='lname'
                    onChange={(e)=>{
                        setLastName(e.target.value)
                    }} 
                    placeholder='Last Name' />
                </Form.Field>
                <Button type='submit' onClick={sendDataToApi}>Submit</Button>
            </Form>
        </div>
    )
}
