// FIXME - refactor to re-usable component
import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Flight from "./Flight";

const Flights = ({ flights, select, selected, rotation }) => (
  <List>
    {flights.map((flight) => (
      <Flight
        key={flight.ident}
        flight={flight}
        selected={rotation && selected.includes(flight)}
        handleClick={select}
        disabled={
          rotation &&
          selected.length > 0 &&
          selected[selected.length - 1].ident !== flight.ident
        }
      />
    ))}
  </List>
);

export default Flights;

Flights.propTypes = {
  flights: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  rotation: PropTypes.bool,
};
