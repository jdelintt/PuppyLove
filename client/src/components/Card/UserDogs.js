import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Image, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faDog } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/API";
import CardBody from "../../components/Card/CardBody.js";
import CustomInput from '../../components/CustomInput/CustomInput.js';
import Card1 from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import cardsStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import CardFooter from "../../components/Card/CardFooter.js";
import imgCMS from "./imgCMS";
import Slider from "react-slick";

class Card2 extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
          <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        
      </Slider>
    );
  }
}
export default Card2;