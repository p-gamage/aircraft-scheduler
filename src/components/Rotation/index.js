import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Flight from "../Flights/Flight";
import Title from "../common/Title";
import InfoAlert from "../common/InfoAlert";

const Rotation = ({ flights, select, selected, selectedAircraft }) => (
  <>
    <Title text={`Rotation ${selectedAircraft}`} />
    {selected.length > 0 ? (
      <List>
        {flights.map((flight) => (
          <Flight
            key={flight.ident}
            flight={flight}
            selected={selected.includes(flight)}
            handleClick={select}
            disabled={selected[selected.length - 1].ident !== flight.ident}
          />
        ))}
      </List>
    ) : (
      <InfoAlert
        titleText="Select a flight"
        body="Please select one from the right to start the rotation"
      />
    )}
  </>
);

export default Rotation;

Rotation.propTypes = {
  flights: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  selectedAircraft: PropTypes.string,
};
