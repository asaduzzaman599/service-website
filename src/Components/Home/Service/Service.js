import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {

    const { price, name, img, description } = service;
    return (
        <Col md={3} lg={4}>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{description}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;