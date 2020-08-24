import React from "react";
import PropTypes from "prop-types";
import { Alert, AlertTitle } from "@material-ui/lab";

const InfoAlert = ({ titleText, body }) => (
  <Alert severity="info">
    <AlertTitle style={{ textAlign: "left" }}>{titleText}</AlertTitle>
    {body}
  </Alert>
);

export default InfoAlert;

InfoAlert.propTypes = {
  titleText: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
