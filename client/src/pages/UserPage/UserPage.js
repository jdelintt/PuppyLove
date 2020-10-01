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
import "./App.css";






// import Navbar from "./components/NavBar"

function User() {
    const [isLoading, setLoading] = useState(false)
    const [userData, setUserData] = useState();
    
    const setLoadingState = (value) => {
        setLoading(value)
    }
    
    
    
    return (
        <>
        
    <div style={{width: '100%', height: '100%'}}>
        {isLoading && <Loading/>}
        {!isLoading && <Container style={{ maxWidth: "2000px" }}>
            
            <Row>
                <Col size="md-4 sm-12">
                    <Card setLoading={setLoadingState} header="My Recent Pups" link1="https://i.pinimg.com/originals/e6/3d/2c/e63d2c80d0603f41f9455a5389694fae.jpg" link2="https://pyxis.nymag.com/v1/imgs/1fa/1b2/4ae76fa8c9910485045e4f9a956345903b-18-puppy-dog-eyes.rsquare.w1200.jpg" isFirstCard={true}/>

                </Col>
                <Col size="md-4 sm-12">
                    <Carousel style={{margin:"auto"}}>
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
                <Col size="md-4 sm-12">
                    <Card setLoading={setLoadingState} header="Dogs In My Area" link1="https://i.pinimg.com/originals/e6/3d/2c/e63d2c80d0603f41f9455a5389694fae.jpg" link2="https://pyxis.nymag.com/v1/imgs/1fa/1b2/4ae76fa8c9910485045e4f9a956345903b-18-puppy-dog-eyes.rsquare.w1200.jpg" isFirstCard={false}/>
                </Col>

            </Row>

        </Container>}

    </div>
    </>
    


    );
}

export default User;