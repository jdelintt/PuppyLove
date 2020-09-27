import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Card2 from "../components/Card2"
import { Carousel } from 'react-bootstrap';
import slide01 from "../Images/slide01.jpg";
import slide02 from "../Images/slide02.jpg";
import slide03 from "../Images/slide03.jpg";
import slide04 from "../Images/slide04.jpg";
import slide05 from "../Images/slide05.jpg";
import Footer from "../components/Footer"



// import Navbar from "./components/NavBar"

function User() {
    return (
    
    <div>
        <Container style={{ maxWidth: "2000px" }}>
            <Row>
                <Col size="md-4">
                    <Card></Card>
                    
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
                    <Card2></Card2>
                </Col>

            </Row>

        </Container>
        
            <Footer></Footer>
        

    </div>
    


    );
}

export default User;