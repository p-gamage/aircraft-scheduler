import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Flight from "../Flights/Flight";
import Title from "../common/Title";

const Rotation = ({ flights, select, selected, selectedAircraft }) => (
  <>
    <Title text={`Rotation ${selectedAircraft}`} />
    <List>
      {flights.map((flight) => (
        <Flight
          key={flight.ident}
          flight={flight}
          selected={selected.includes(flight)}
          handleClick={select}
          disabled={
            selected.length > 0 &&
            selected[selected.length - 1].ident !== flight.ident
          }
        />
      ))}
    </List>
  </>
);

export default Rotation;

Rotation.propTypes = {
  flights: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  selectedAircraft: PropTypes.string,
};
