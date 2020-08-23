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

const Flight = ({ flight, selected, handleClick, disabled }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      selected={selected}
      onClick={() => handleClick(flight)}
      divider
      disabled={disabled}
    >
      <ListItemText
        primary={flight.origin}
        secondary={flight.readable_departure}
        inset
      />
      <Typography
        style={{ marginRight: "35%", marginBottom: "20%" }}
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
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
};
