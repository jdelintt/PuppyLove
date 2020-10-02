import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Button from "../../components/CustomButtons/Button.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CardExampleCardRotating from "../Dashboard/index";
import cardsStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import Timeline from "@material-ui/icons/Timeline";

const style = {
  ...cardsStyle,
};

const useStyles = makeStyles(style);

export default function CardExampleCardProfile() {
  const classes = useStyles();
  return (
    <>
      <CardExampleCardRotating />
      <div className="row ">
        <div className="col-md-3">
          <Card profile style={{ maxWidth: "200px" }}>
            <CardHeader image>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  src="https://www.readersdigest.ca/wp-content/uploads/2013/03/6-facts-to-know-before-owning-a-puppy.jpg"
                  alt="..."
                  id="pic1"
                />
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
              <h4 className={classes.cardTitle}>Cutest Puppy Ever</h4>
              <h6
                className={`${classes.cardCategory} ${classes.cardDescription}`}>
                For Adoption!
              </h6>
              <CustomInput
                labelText="Leave a comment!"
                id="float"
                formControlProps={{
                  fullWidth: true,
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
          </Card>
          <Card profile style={{ maxWidth: "200px" }}>
            <CardHeader image>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2020/04/shelter-dog-cropped-1.jpg"
                  alt="..."
                />
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
              <h4 className={classes.cardTitle}>Cutest Puppy Ever</h4>
              <h6
                className={`${classes.cardCategory} ${classes.cardDescription}`}>
                For Adoption!
              </h6>
              <CustomInput
                labelText="Leave a comment!"
                id="float"
                formControlProps={{
                  fullWidth: true,
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
          </Card>
        </div>
        <div className="col-md-6 ">
          <InfoArea
            title="Welcome to Puppy Love"
            description="We've created the perfect place for you to snuggle with your best friend!"
            icon={Timeline}
            iconColor="purple"
          />
        </div>
        <div className="col-md-3">
          <Card profile style={{ maxWidth: "200px", position: "right" }}>
            <CardHeader image>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  src="https://dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg"
                  alt="..."
                />
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
              <h4 className={classes.cardTitle}>Cutest Puppy Ever</h4>
              <h6
                className={`${classes.cardCategory} ${classes.cardDescription}`}>
                For Adoption!
              </h6>
              <CustomInput
                labelText="Leave a comment!"
                id="float"
                formControlProps={{
                  fullWidth: true,
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
          </Card>
          <Card profile style={{ maxWidth: "200px" }}>
            <CardHeader image>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOYAzJv7fg2dYpdANGVXDExQFwwYqSoBMz9A&usqp=CAU"
                  alt="..."
                />
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
              <h4 className={classes.cardTitle}>Cutest Puppy Ever</h4>
              <h6
                className={`${classes.cardCategory} ${classes.cardDescription}`}>
                For Adoption!
              </h6>
              <CustomInput
                labelText="Leave a comment!"
                id="float"
                formControlProps={{
                  fullWidth: true,
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
          </Card>
        </div>
      </div>
    </>
  );
}
