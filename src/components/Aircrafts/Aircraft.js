import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemText } from "@material-ui/core";

const Aircraft = ({ aircraft, selected, handleClick }) => (
  <ListItem
    button
    selected={selected === aircraft.ident}
    onClick={() => handleClick(aircraft.ident)}
    divider
  >
    <ListItemText primary={aircraft.ident} />
  </ListItem>
);

export default Aircraft;

Aircraft.propTypes = {
  aircraft: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
