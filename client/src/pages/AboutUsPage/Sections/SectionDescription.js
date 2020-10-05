import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contactStyle";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer >
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
          Hi, welcome to Puppy Love. Here at Puppy Love, our mission is to help
      dogs get a second chance to go back out in the world. There are hundreds of
      dogs in your area that could use your help, time, support, love, and
      home, more then you know.
            
          </h5>
          <h5 className={classes.description}> Maybe you don’t
      have the space or the time to own a dog right now but still love our fuzzy,four-legged companions: you’ve come to the right place. A happy, social pup is more likely to be adopted, but shelters in your area are struggling to provide their dogs with one-on-one love and support. We would love to improve the day-to-day quality of life for these pups while also getting
      these dogs out of the shelter and into a home - that’s where you come in.
      Walks, games, belly rubs, booty pats: more frequent socialization with our
      canine pals so they can reinforce their social skills
      with good habits, but most all they need your LOVE!</h5>
      <h5 className={classes.description}> How it works: first we ask that you pass a simple background check, to ensure the safety of everyone involved, dog or person. Then you will be asked a few simple questions to help us pair you with the dog that’s right for you. Using your preferences, we compile a list of dogs from a select number of shelters in your area. From this list, you can choose a play date and time for however many hours you can give. The first couple of times with a new dog, we ask that you spend the time there at the shelter, for the dog's comfort and yours. On your third visit, you'll finally get to show off the pup you've been seeing, because you will be able to take your four-legged companion out of the shelter. Tire them out with a game of fetch on the beach, or stalk squirrels together in a park: we believe the best way to find forever homes for these pups is to get them out there, happy, healthy, and mingling.</h5>
      <h5 className={classes.description}> Did your pup love tennis balls but hate tug-of-war? A little nervous around bigger dogs? To help with the adoption process, we ask that, after you meet your friend, you leave some comments about your experience. Write about their personality, temperament, favorite games and treats: these details give a prospective adopter a better idea about any pup they're interested in. Who knows? Maybe, at the end of the day, you might just be their forever home after all. Whether you're looking to adopt immediately or just looking to give, Puppy Love is for love for everyone!</h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
