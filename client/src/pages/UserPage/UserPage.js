import React, { useState } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Card from "../../components/Card";
import { Carousel } from 'react-bootstrap';
import slide01 from "../../Images/slide01.jpg";
import slide02 from "../../Images/slide02.jpg";
import slide03 from "../../Images/slide03.jpg";
import slide04 from "../../Images/slide04.jpg";
import slide05 from "../../Images/slide05.jpg";
import Loading from "../../components/Loading/Loading";






// import Navbar from "./components/NavBar"

function User() {
    const [isLoading, setLoading] = useState(false)

    const delay = (v) => {
        return new Promise((resolve) => {
            setTimeout(resolve.bind(null, v), 5000)
        })
    }

    const mockAPI = (e) => {
        e.preventDefault();
        setLoading(true);
        delay().then(() => {
            setLoading(false)
        })
    }
    return (
    
    <div style={{width: '100%', height: '100%'}}>
        {isLoading && <Loading/>}
        {!isLoading && <Container style={{ maxWidth: "2000px" }}>
            <button onClick={mockAPI}>Mock API Call</button>
            <Row>
                <Col size="md-4">
                    <Card header="My Recent Pups"/>

                    
                </Col>
                <Col size="md-4">
                    <Carousel>
                        <Carousel.Item>
                            <img src={slide01} alt="chubby dog"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide02} alt="smol dog"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide03} alt="german"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide04} alt="chubby dog"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide05} alt="chubby dog"/>
                        </Carousel.Item>
                    </Carousel>

                </Col>
                <Col size="md-4">
                    <Card header="Dogs In My Area"/>
                </Col>

            </Row>

        </Container>}

    </div>
    


    );
}

export default User;