/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import landingPageStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/landingPageSections/landingPageStyle";
import CircularProgress from '@material-ui/core/CircularProgress';

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionWork from "./Sections/SectionWork.js";
import BackgroundVideo from "../../components/backgroundVideo/backgroundVideo"
import Pets from "@material-ui/icons/Pets";


const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ user, ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax
      
      image="https://images.squarespace-cdn.com/content/v1/5516c5b7e4b03ac54f20366d/1553273442353-W0RFRN1IOUXX4FPJOPNM/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/OtieTreat_-11.jpg"
    filter="dark"
        >
        <div className={classes.container}>
          <BackgroundVideo/>
          <GridContainer>
            
           
            <GridItem xs={12} sm={6} md={6}>
              <h1><Pets/>  Hello {user?.username}!  <Pets/></h1>
              <h1 className={classes.title} >
                Puppies make everything better...
              </h1>
              <h4>
                Come and get your P<Favorite/>ppy Love! We are proud to present a home for
                dog lovers to interact with local canines who are in despeate
                need of HUGS!!
              </h4>
              <br />
             
              <Button
                color="success"
                size="lg"
                href="/signup"
                >
                Log In/SignUp
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <SectionTeam />
          <SectionWork />
          
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}>
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} 
              <a
                href="https://www.creative-tim.com/?ref=mkpr-landing"
                target="_blank">
               
              </a>{" "}
            </div>
          </div>
        }
      />
    </div>
  );
}
