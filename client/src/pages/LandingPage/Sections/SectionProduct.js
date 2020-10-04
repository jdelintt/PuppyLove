import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Pets from "@material-ui/icons/Pets";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Dogsfill from "../../UserPage/Userlist"

import productStyle from "../../../assets/jss/material-kit-pro-react/views/componentsSections/landingPageSections/productStyle";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Who's ready for some puppy love?</h2>
          <h5 className={classes.description}>
          Besides babies, there’s nothing in the world that brings humans as much joy as puppies. They’re smart, wise and more loyal than most humans you know.
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Log of L♥️ve"
              description="We know how important it is to keep track of all the puppy kisses and so we provide a log of all the pups you've hugged."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Verified Users"
              description="The safety of our animals is extremely important to us so expect a background check before joining the fun!"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="PuppyPrint"
              description="We here at Puppy L♥️ve wnat nothing more than to empower our puppy paws!"
              icon={Pets}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
        
        {/* <Dogsfill/> */}
      </div>
    </div>
  );
}
