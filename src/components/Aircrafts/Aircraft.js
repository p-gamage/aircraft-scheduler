import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemText, Paper } from "@material-ui/core";

const Aircraft = ({ aircraft, selected, handleClick }) => (
  <Paper variant="outlined">
    <ListItem
      button
      selected={selected === aircraft.ident}
      onClick={() => handleClick(aircraft.ident)}
      divider
    >
      <ListItemText primary={aircraft.ident} style={{ textAlign: "center" }} />
    </ListItem>
  </Paper>
);

export default Aircraft;

Aircraft.propTypes = {
  aircraft: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
