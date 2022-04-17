import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SingleCard from "../SingleCard/SingleCard";

function Cards() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("service.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    console.log(services);

    return (
        <Row className="g-4">
            {services.map((service) => (
                <Col key={service.id} lg="4" md="6">
                    <SingleCard service={service} />
                </Col>
            ))}
        </Row>
    );
}

export default Cards;
