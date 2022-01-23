import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function Create() {
    const navigate = useNavigate();
    const [Product, setProductName] = useState('');
    const [SKUId, setSkuId] = useState('');
    const [ShopName, setShopName] = useState('');
    const [GSTregisteration, setGSTregisteration] = useState('');
    const [FSSAI_Licence, setFSSAI_Licence] = useState('');
    const [Total_weight, setTotal_weight] = useState('');
    const [Package_dimension, setPackage_dimension] = useState('');
    const [Full_address, setFull_address] = useState('');
    const [Pin_code, setPin_code] = useState('');
    const [ShippingPlatform, setShippingPlatform] = useState('');
    const [Phone_No, setPhone_No] = useState('');
    const sendDataToApi = () => {
        axios.post(`https://61e1b1183050a10017681f5f.mockapi.io/crud`, {
            Product,
            SKUId,
            ShopName,
            GSTregisteration,
            FSSAI_Licence,
            Total_weight,
            Package_dimension,
            Full_address,
            Pin_code,
            ShippingPlatform,
            Phone_No
        }).then(() => {
            navigate('/read');
        })
    }
    return (
        <div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Product Name" onChange={(e) => {
                        setProductName(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>SKU_Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter SKU_Id" onChange={(e) => {
                        setSkuId(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>ShopName</Form.Label>
                    <Form.Control type="text" placeholder="Enter ShopName" onChange={(e) => {
                        setShopName(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>GST_registration</Form.Label>
                    <Form.Control type="text" placeholder="Enter GST_registration" onChange={(e) => {
                        setGSTregisteration(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>FSSAI_Licence</Form.Label>
                    <Form.Control type="text" placeholder="Enter FSSAI_Licence" onChange={(e) => {
                        setFSSAI_Licence(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Total_weight</Form.Label>
                    <Form.Control type="text" placeholder="Enter Total_weight" onChange={(e) => {
                        setTotal_weight(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Package_dimension</Form.Label>
                    <Form.Control type="text" placeholder="Enter Package_dimension" onChange={(e) => {
                        setPackage_dimension(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Full_address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full_address" onChange={(e) => {
                        setFull_address(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Pin_code</Form.Label>
                    <Form.Control type="text" placeholder="Enter Pin_code" onChange={(e) => {
                        setPin_code(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Shipping Platform</Form.Label>
                    <Form.Control type="text" placeholder="Enter Shipping Platform" onChange={(e) => {
                        setShippingPlatform(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone_no</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone_No" onChange={(e) => {
                        setPhone_No(e.target.value)
                    }} />
                </Form.Group>
                <Button class="btn btn-outline-primary m-1" type='submit' onClick={sendDataToApi}>Submit</Button>
                <div>
                    <Link to='/read'>
                        <Button class="btn btn-outline-primary m-1"> View Vendors Table</Button>
                    </Link>
                </div>
            </Form>
        </div>

    )
}
