import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const CRUD = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const empData = [
        {
            id: 1,
            name: 'Saim',
            age: 23,
            isActive: 1
        },
        {
            id: 2,
            name: 'Wasiq',
            age: 23,
            isActive: 1
        },
        {
            id: 3,
            name: 'Haziq',
            age: 21,
            isActive: 0
        }
    ]

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(empData);
    }, []);

    const handleEdit = (id) => {
        handleShow();
    };

    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this record ?")) {
            alert(id);
        }
    }

    const handleUpdate = (id) => {
        
    }

    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>isActive</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.isActive}</td>
                                        <td colSpan={2}>
                                            <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                                            <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                            :
                            'Loading...'
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
};

export default CRUD;