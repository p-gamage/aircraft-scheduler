import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  Typography,
  Box,
  ListItemIcon,
  Paper,
} from "@material-ui/core";
import FlightTakeoffOutlinedIcon from "@material-ui/icons/FlightTakeoffOutlined";
import FlightLandOutlinedIcon from "@material-ui/icons/FlightLandOutlined";

const Flight = ({ flight, selected, handleClick, disabled }) => {
  return (
    <Paper variant="outlined" style={{ marginBottom: "1rem" }}>
      <ListItem
        button
        selected={selected}
        onClick={() => handleClick(flight)}
        divider
        disabled={disabled}
      >
        <Box width="100%">
          <Typography component="h3" color="primary" align="center">
            {flight.ident}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <ListItemIcon>
              <FlightTakeoffOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={flight.origin}
              secondary={flight.readable_departure}
            />
            <ListItemIcon>
              <FlightLandOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={flight.destination}
              secondary={flight.readable_arrival}
              style={{ flex: "none" }}
            />
          </Box>
        </Box>
      </ListItem>
    </Paper>
  );
};

export default Flight;

Flight.propTypes = {
  flight: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
};
