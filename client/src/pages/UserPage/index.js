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
import PetsIcon from '@material-ui/icons/Pets';
import Grid from "@material-ui/core/Grid";
import Dogsfill from "./Userlist"
import UserDogsFilter from "../../components/Userfilter/UserDogsFilter"
// import UserDogsFilter from "../../components/Userfilter/UserDogsFilter";
const style = {
  ...cardsStyle,
};

const useStyles = makeStyles(style);

export default function CardExampleCardProfile({ user }) {
  const classes = useStyles();
  return (
    <>
      <InfoArea
        username={user?.username || ""}
        description="We've created the perfect place for you to snuggle with your best friend!"
        icon={PetsIcon}
        iconColor="purple"
      />
      <CardExampleCardRotating />
      <h3 className="mt-5 mb-3" style={{textAlign:"center"}}>Dogs You've Interacted With:</h3>
      <div className="row mt-5">
        <Dogsfill/>
        <div className="col-md-12">
        {/* <Dogsfill/> */}
          
              </div>
              <div className="col-md-12">
        <UserDogsFilter/>
          
              </div>

                    
      </div>
    </>
  );
}
