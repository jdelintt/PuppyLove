import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Image, Modal, Button, Carousel } from "react-bootstrap";
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
import DogsFill from "../../pages/UserPage/Userlist"

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

const cardText = {
  // "My Recent Pups": "Dogs I recently interacted with.",
  // "Dogs In My Area": "Find pups that are close to me."
};

function Card({ header, setLoading, link1, link2, isFirstCard }) {
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

  const delay = (v) => {
    return new Promise((resolve) => {
      setTimeout(resolve.bind(null, v), 5000);
    });
  };

  // Set load state to true
  // make API call
  // When API resolves (Success or Failure)
  // Set load state to false
  const mockAPI = (e) => {
    e.preventDefault();
    setLoading(true);
    delay()
      .then(() => {
          // Set load state to true
          // make API call
          // When API resolves (Success or Failure)
          // Set load state to false
  const mockAPI = (e) => {
        //throw new Error('Error')
        setLoading(false);
      }})
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  

  const classes = useStyles();
  return (

      <div className="card text-center">
      <div>
    {dog.length ? (
      <p>
        {dog.map(item => {
          return (
            <div>
              
              <p key={item._id}>
                <Card1 profile style={{ maxWidth: "200px", maxHeight: "50px" }}>
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
                  </CardBody>
                  
                </Card1>
                    {/* <img src = {require(`../../assets/img/dogpics/${item.image}`)}/> */}
                    
        </p>
                </div>
           );
        })}
      </p>
    ) : (
      <h3>No Results to Display</h3>
    )}
    </div>
    
      

      
    </div>

  );
  
}

export default Card;
