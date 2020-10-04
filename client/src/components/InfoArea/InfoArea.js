import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import styles from "../../assets/jss/material-kit-pro-react/components/infoStyle";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const { description, iconColor, vertical, className, username } = props;
  const classes = useStyles();
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  });
  const infoAreaClasses = classNames({
    [classes.infoArea]: true,
    [className]: className !== undefined,
  });
  let icon = null;
  switch (typeof props.icon) {
    case "string":
      icon = <Icon className={iconClasses}>{props.icon}</Icon>;
      break;
    default:
      icon = <props.icon className={iconClasses} />;
      break;
  }
  return (
    <div className={infoAreaClasses}>
      <div className={classes.descriptionWrapper}>
        <h2 className={classes.title}>
          <span>Welcome To Puppy </span>
          <span className={iconWrapper}>{icon}</span>
          <span>{` Love ${username}`}</span>
        </h2>
        <h4 className={classes.description}>{description}</h4>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray",
};

InfoArea.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
    "purple",
  ]),
  vertical: PropTypes.bool,
  className: PropTypes.string,
};
