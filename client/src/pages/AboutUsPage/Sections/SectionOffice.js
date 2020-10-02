import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import officeStyle from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contactStyle";

// office
// import office1 from "assets/img/examples/office1.jpg";
// import office2 from "assets/img/examples/office2.jpg";
// import office3 from "assets/img/examples/office3.jpg";
// import office4 from "assets/img/examples/office4.jpg";
// import office5 from "assets/img/examples/office5.jpg";

const useStyles = makeStyles(officeStyle);

export default function SectionOffice() {
  const classes = useStyles();
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Our office is our second home</h2>
          <h4 className={classes.description}>
            Here are some pictures from our office. You can see the place looks
            like a palace and is fully equiped with everything you need to get
            the job done.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
