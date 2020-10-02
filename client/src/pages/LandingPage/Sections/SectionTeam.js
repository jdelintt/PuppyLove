import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import Muted from "../../../components/Typography/Muted.js";
import CardAvatar from "../../../components/Card/CardAvatar.js";
import Button from "../../../components/CustomButtons/Button.js";
import classNames from "classnames";

// import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
// import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
// import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
// import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

import teamsStyle from "../../../assets/jss/material-kit-pro-react/views/componentsSections/sectionsSections/teamsStyle";
import teamStyle from "../../../assets/jss/material-kit-pro-react/views/componentsSections/landingPageSections/teamStyle";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We are dog LOVERS</h2>
          <h5 className={classes.description}>
            We are so proud to bring this website together to help puppys and people unite!
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src="https://img.huffingtonpost.com/asset/5bfdc499210000b906ca2a64.png?ops=scalefit_720_noupscale" alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Jesus DeLinntt</h4>
              <h6 className={classes.textMuted}>Puppy Player</h6>
              <p className={classes.cardDescription}>
                I love dem pooches!
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2017/05/04/merrick_aspen_h.jpg?itok=8AQTTamd"
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Andrew Kim</h4>
              <h6 className={classes.textMuted}>Puppy Player</h6>
              <p className={classes.cardDescription}>
                I love pooches too!
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
              <Button href="#pablo" justIcon simple color="linkedin">
                <i className="fab fa-linkedin-in" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQW4GD98Pys6l870UJhRHmDjqjv3AdwuX9puw&usqp=CAU"
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Aileen Wang</h4>
              <h6 className={classes.textMuted}>Puppy Player</h6>
              <p className={classes.cardDescription}>
                I love bad bitches!
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2015/06/23/three-obedient-dogs-looking-left_s.jpg?itok=4edH0EgF"
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Aragon</h4>
              <h6 className={classes.textMuted}>Puppy Player</h6>
              <p className={classes.cardDescription}>
                I can't remember the last time I slept.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={2} sm={2}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src = "https://static.boredpanda.com/blog/wp-content/uploads/2015/05/DSC9733_edit__880.jpg"
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Ryan Braun</h4>
              <h6 className={classes.textMuted}>Puppy Player</h6>
              <p className={classes.cardDescription}>
                Sometimes you just gotta say NO.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      </div>
    </div>
  );
}
