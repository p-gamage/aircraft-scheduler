import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const Title = ({ text }) => (
  <Typography variant="h5" align="center" children={text} gutterBottom />
);

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
