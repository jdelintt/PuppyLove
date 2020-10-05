import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui icons
import Subject from "@material-ui/icons/Subject";
import Delete from "@material-ui/icons/Delete";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Button from "../../components/CustomButtons/Button.js";

// import cardBlog5 from "../../Images/";

import cardsStyle from "./sectionCards.js";

const style = {
  ...cardsStyle
};

const useStyles = makeStyles(style);

export default function CardExampleCardRotating() {
  React.useEffect(() => {
    addStylesForRotatingCards();
    return function cleanup() {};
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "30px";
      cardFront.style.width = "30px";
      cardBack.style.height = "30px";
      cardBack.style.width = "30px";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "30px";
      cardFront.style.width = "30px";
      cardBack.style.height = "30px";
      cardBack.style.width = "30px";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8} lg={6}>
        <div className={classes.rotatingCardContainer}>
          <Card background className={classes.cardRotate}>
            <div
              className={`${classes.front} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeiTMm_mSFQLOORFJdxxNloXF704uOkPRFDw&usqp=CAU)`,
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h6 className={classes.cardCategoryWhite}>
                  You Should Really Adopt 3!
                </h6>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <h3 className={classes.cardTitleWhite}>
                    Trust me, what's better than ALL THE PUPPIES!!
                  </h3>
                </a>
                <p className={classes.cardDescriptionWhite}>
                  Don't worry, having multiple dogs is super easy.....
                </p>
              </CardBody>
            </div>
            <div
              className={`${classes.back} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url(https://www.therapydogs.com/wp-content/uploads/2017/06/puppy.jpg)`,
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                <p className={classes.cardDescriptionWhite}>
                  Wow you really look lonely...time for a puppy!
                </p>
                <div className={classes.textCenter}>
                  <Button round justIcon color="info">
                    <Subject />
                  </Button>
                  <Button round justIcon color="success">
                    <Icon>mode_edit</Icon>
                  </Button>
                  <Button round justIcon color="danger">
                    <Delete />
                  </Button>
                </div>
              </CardBody>
            </div>
          </Card>
        </div>
      </GridItem>
    </GridContainer>
  );
}