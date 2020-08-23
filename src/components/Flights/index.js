// FIXME - refactor to re-usable component
import React from "react";
import PropTypes from "prop-types";
import { List, Divider } from "@material-ui/core";
import Flight from "./Flight";

const Flights = ({ flights, select, selected }) => (
  <List>
    {flights.map((flight) => (
      <div key={flight.ident}>
        <Flight flight={flight} selected={selected} handleClick={select} />
        <Divider />
      </div>
    ))}
  </List>
);

export default Flights;

Flights.propTypes = {
  flights: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
};
