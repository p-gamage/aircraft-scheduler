import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Flight from "../Flights/Flight";
import Title from "../common/Title";
import InfoAlert from "../common/InfoAlert";
import Timeline from "../Timeline";

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
    <Timeline rotation={selected} />
  </>
);

export default Rotation;

Rotation.propTypes = {
  flights: PropTypes.arrayOf(Object).isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(Object).isRequired,
  selectedAircraft: PropTypes.string,
};
