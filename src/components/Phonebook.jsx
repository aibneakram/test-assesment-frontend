import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiContactsBookUploadFill } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import "./phonebook.css"
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { MdCall } from "react-icons/md";

export default function Phonebook() {
    return (
        <div >
            <main>
                <Container fluid="md" >
                    <Row className='header'>
                        <Col><RiContactsBookUploadFill /> Phone Book App</Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className='contact'>Contacts</Col>
                        <Col className='button'><Button variant="primary">+ Add Contact</Button></Col>
                    </Row>
                </Container>

                <Container style={{marginTop:'10px'}} >
                    <Card style={{ width: 'auto', backgroundColor: 'white' }}>
                        <Card.Body>
                            <Card.Title>Eric Elliot</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><MdCall /> 222-555-666</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Container>
            </main>
        </div>


    )
}
