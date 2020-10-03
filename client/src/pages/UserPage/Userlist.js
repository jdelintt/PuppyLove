import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import API from "../../utils/API";
import imgCMS from "../../components/Card/imgCMS";
import CardBody from "../../components/Card/CardBody.js";
import CustomInput from '../../components/CustomInput/CustomInput.js';
import Card1 from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import cardsStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";

const style = {
  ...cardsStyle
};
const useStyles = makeStyles(style);
const styles = {
  card: {
    height: 50,
  },
  header: {
    background: "orange",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  image: {
    padding: "20px",
    marginRight: "300px",
  },
  image2: {
    padding: "20px",
    marginLeft: "210px",
  },
};


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



function Dogsfill() {
  const [show, setShow] = useState(false);
  const [dog, fillDogs] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    findDogs();
  }, []);

  function findDogs() {
    API.getDogs()
      .then((res) => fillDogs(res.data))
      .catch((err) => console.log(err));
    // Add code here to get all books from the database and store them using setBooks
  }
  const classes = useStyles();
  return ( 
    <div>
    <Carousel 
      responsive={responsive}
      swipeable={true}
      infinite={true}
    >
    
      {dog.map(item => 
        <p key={item._id}>
        <Card1 profile style={{ maxWidth: "200px" }}>
          <CardHeader image>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                      src = {imgCMS[item.imagePath]}
                      alt="..."
                  />
              </a>
          <div
              className={classes.coloredShadow}
              style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)`,
              opacity: "1"
              }}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>{item.name}</h4>
            <h6 className={`${classes.cardCategory} ${classes.cardDescription}`}>
            For Adoption!
            </h6>
            <CustomInput
              labelText="Leave a comment!"
              id="float"
              formControlProps={{
              fullWidth: true
              }}
            />
            <CustomInput
              labelText="Schedule a comment!"
              id="float"
              formControlProps={{
              fullWidth: true
              }}
            />
          </CardBody>
          <CardFooter profile className={classes.justifyContentCenter}>
          <Button justIcon round color="twitter">
            <i className="fab fa-twitter" />
          </Button>
          <Button justIcon round color="facebook">
             <i className="fab fa-facebook" />
          </Button>
          <Button justIcon round color="google">
            <i className="fab fa-google" />
          </Button>
          </CardFooter>
        </Card1>
            {/* <img src = {require(`../../assets/img/dogpics/${item.image}`)}/> */}
            
</p>
      )}
     </Carousel>
    </div>
  )}

export default Dogsfill;