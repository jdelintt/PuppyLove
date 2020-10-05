import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import API from "../../utils/API";
import imgCMS from "../../components/Card/imgCMS";
import CardBody from "../../components/Card/CardBody.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Card1 from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import cardsStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";

const style = {
  ...cardsStyle,
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
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function UserDogsFilter() {
  const [dog, fillDogs] = useState([]);

  const [commentInput, setComment] = useState({
    comment: "",
  });

  useEffect(() => {
    findDogs();
    getDogData();
  }, []);

  const [userPref, setUserPref] = useState("");

  const thisUser = localStorage.getItem("id");

  //saving it into hooks
  function getDogData() {
    API.getDogs().then((res) => {
      console.log(res);
      setUserPref(res);
    });
  }

  function findDogs() {
    API.getDogs()
      .then((res) => fillDogs(res.data))
      .catch((err) => console.log(err));
    // Add code here to get all books from the database and store them using setBooks
  }

  const handleInput = ({ target: { name, value } }) => {
    setComment({ ...commentInput, [name]: value });
    console.log(commentInput);
  };

  function updateComment(id, commentInput, event) {
    event.preventDefault();
    API.updatedbComment(id, commentInput)
      .then((res) => findDogs())
      .catch((err) => console.log(err));
  }
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        justifyContent="center"
      >
        {
          (dog.filter((name) => name.breed === "Labrador"),
          dog.map((item, index) => (
            <p key={item._id}>
              <Card1 profile style={{ maxWidth: "100px" }}>
                <CardHeader image>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={imgCMS[item.imagePath]} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)`,
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>{item.name}</h4>
                  <h6
                    className={`${classes.cardCategory} ${classes.cardDescription}`}
                  ></h6>
                  <CustomInput
                    name="comment"
                    labelText="Leave a comment!"
                    id={`float ${index + 1}`}
                    onChange={(e) => handleInput()}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />{" "}
                  {/* {comment ? null : <Button onClick={post comment function}>Submit</Button>} */}
                  <Button onClick={() => updateComment(item._id, commentInput)}>
                    Submit
                  </Button>
                  <Button round className={classes.buttonStyle}>
                    <Favorite />
                    Schedule a play date!
                  </Button>
                </CardBody>
              </Card1>
              {/* <img src = {require(`../../assets/img/dogpics/${item.image}`)}/> */}
            </p>
          )))
        }
      </Carousel>
    </Box>
  );
}

export default UserDogsFilter;
