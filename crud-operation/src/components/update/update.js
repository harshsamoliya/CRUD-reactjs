import { React, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Update() {
     const [Product, setProductName] = useState('');
    const [SKUId , setSkuId] = useState('');
    const [ShopName , setShopName] = useState('');
    const [GSTregisteration , setGSTregisteration] = useState('');
    const [FSSAI_Licence , setFSSAI_Licence] = useState('');
    const [Total_weight , setTotal_weight] = useState('');
    const [Package_dimension , setPackage_dimension] = useState('');
    const [Full_address , setFull_address] = useState('');
    const [Pin_code , setPin_code] = useState('');
    const [ShippingPlatform , setShippingPlatform] = useState('');
    const [Phone_No , setPhone_No] = useState('');
    const [ID, setID] = useState(null);
    const navigate = useNavigate();

    const sendDataToApi = () => {
        axios.put(`https://61e1b1183050a10017681f5f.mockapi.io/crud/${ID}`, {
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
    useEffect(() => {
        setProductName(localStorage.getItem('Product'));
        setSkuId(localStorage.getItem('SKUId'));
        setShopName(localStorage.getItem('ShopName'));
        setGSTregisteration(localStorage.getItem('GSTregisteration'));
        setFSSAI_Licence(localStorage.getItem('FSSAI_Licence'));
        setTotal_weight(localStorage.getItem('Total_weight'));
        setPackage_dimension(localStorage.getItem('Package_dimension'));
        setFull_address(localStorage.getItem('Full_address'));
        setPin_code(localStorage.getItem('Pin_code'));
        setShippingPlatform(localStorage.getItem('ShippingPlatform'));
        setPhone_No(localStorage.getItem('Phone_No'));
        setID(localStorage.getItem('ID'));
    }, [])
    return (
        <div>
            <Form>
            <Form.Group className="mb-3" >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="email" value ={Product}placeholder="Enter Product Name" onChange={(e) => {
                        setProductName(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>SKU_Id</Form.Label>
                    <Form.Control type="text" value = {SKUId}placeholder="Enter SKU_Id" onChange={(e) => {
                        setSkuId(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>ShopName</Form.Label>
                    <Form.Control type="text" value={ShopName} placeholder="Enter ShopName" onChange={(e) => {
                        setShopName(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>GST_registration</Form.Label>
                    <Form.Control type="text" value={GSTregisteration} placeholder="Enter GST_registration" onChange={(e) => {
                        setGSTregisteration(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>FSSAI_Licence</Form.Label>
                    <Form.Control type="text" value={FSSAI_Licence} placeholder="Enter FSSAI_Licence" onChange={(e) => {
                        setFSSAI_Licence(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Total_weight</Form.Label>
                    <Form.Control type="text" value={Total_weight} placeholder="Enter Total_weight" onChange={(e) => {
                        setTotal_weight(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Package_dimension</Form.Label>
                    <Form.Control type="text"  value = {Package_dimension} placeholder="Enter Package_dimension" onChange={(e) => {
                        setPackage_dimension(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Full_address</Form.Label>
                    <Form.Control type="text" value={Full_address} placeholder="Enter Full_address" onChange={(e) => {
                        setFull_address(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Pin_code</Form.Label>
                    <Form.Control type="text" value={Pin_code} placeholder="Enter Pin_code" onChange={(e) => {
                        setPin_code(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Shipping Platform</Form.Label>
                    <Form.Control type="text" value={ShippingPlatform} placeholder="Enter Shipping Platform" onChange={(e) => {
                        setShippingPlatform(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone_no</Form.Label>
                    <Form.Control type="text" value={Phone_No} placeholder="Enter Phone_No" onChange={(e) => {
                        setPhone_No(e.target.value)
                    }} />
                </Form.Group>
                <Button type='submit' onClick={sendDataToApi}>Update</Button>
            </Form>
        </div>
    )
}
