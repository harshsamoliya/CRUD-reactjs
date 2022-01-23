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
    const setData = (id, Product, SKUId, ShopName, GSTregisteration, FSSAI_Licence, Total_weight, Package_dimension, Full_address, Pin_code, ShippingPlatform, Phone_No) => {
        localStorage.setItem('ID', id);
        localStorage.setItem('Product', Product);
        localStorage.setItem('SKUId', SKUId);
        localStorage.setItem('ShopName', ShopName);
        localStorage.setItem('GSTregisteration', GSTregisteration);
        localStorage.setItem('FSSAI_Licence', FSSAI_Licence);
        localStorage.setItem('Total_weight', Total_weight);
        localStorage.setItem('Package_dimension', Package_dimension);
        localStorage.setItem('Full_address', Full_address);
        localStorage.setItem('Pin_code', Pin_code);
        localStorage.setItem('ShippingPlatform', ShippingPlatform);
        localStorage.setItem('Phone_No', Phone_No);
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
                        <th>ProductName</th>
                        <th>SKUId</th>
                        <th>ShopName</th>
                        <th>GSTregisteration</th>
                        <th>FSSAI_Licence</th>
                        <th>Total_weight</th>
                        <th>Package_dimension</th>
                        <th>Full_address</th>
                        <th>Pin_code</th>
                        <th>ShippingPlatform</th>
                        <th>Phone_No</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map((data) => {
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.Product}</td>
                                <td>{data.SKUId}</td>
                                <td>{data.ShopName}</td>
                                <td>{data.GSTregisteration}</td>
                                <td>{data.FSSAI_Licence}</td>
                                <td>{data.Total_weight}</td>
                                <td>{data.Package_dimension}</td>
                                <td>{data.Full_address}</td>
                                <td>{data.Pin_code}</td>
                                <td>{data.ShippingPlatform}</td>
                                <td>{data.Phone_No}</td>
                                <td>
                                    <Link to='/update'>
                                        <Button color="green" onClick={() => {
                                            setData(data.id, data.Product, data.SKUId, data.ShopName, data.GSTregisteration, data.FSSAI_Licence, data.Total_weight, data.Package_dimension, data.Full_address, data.Pin_code, data.ShippingPlatform, data.Phone_No)
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
