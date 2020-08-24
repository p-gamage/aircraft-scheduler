import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Flight from "./Flight";
import Title from "../common/Title";
import InfoAlert from "../common/InfoAlert";

const Flights = ({ flights, select, selectedFlights }) => (
  <>
    <Title text="Flights" />
    {flights.length === 0 && selectedFlights.length === 0 && (
      <InfoAlert titleText="Loading flights..." body="Please be patient" />
    )}
    <List style={{ maxHeight: "90vh", overflow: "auto" }}>
      {flights.length === 0 && selectedFlights.length > 0 ? (
        <InfoAlert
          titleText="No more flights left"
          body="Edit rotation or refresh the page to start again"
        />
      ) : (
        flights.map((flight) => (
          <Flight key={flight.ident} flight={flight} handleClick={select} />
        ))
      )}
    </List>
  </>
);

export default Flights;

Flights.propTypes = {
  flights: PropTypes.arrayOf(Object).isRequired,
  select: PropTypes.func.isRequired,
};
