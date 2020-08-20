import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  makeStyles,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paddingRight: {
    paddingRight: "56px",
  },
}));

const Flight = ({ flight, selected, handleClick }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      selected={selected.includes(flight.ident)}
      onClick={() => handleClick(flight.ident)}
    >
      <ListItemText
        primary={flight.origin}
        secondary={flight.readable_departure}
        inset
      />
      <Typography
        style={{ marginRight: "38%", marginBottom: "20%" }}
        component="h3"
        color="primary"
      >
        {flight.ident}
      </Typography>
      <ListItemSecondaryAction>
        <ListItemText
          classes={{ multiline: classes.paddingRight }}
          primary={flight.destination}
          secondary={flight.readable_arrival}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Flight;

Flight.propTypes = {
  flight: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
