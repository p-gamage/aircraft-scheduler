import React, { useState, useEffect } from "react";
import "./App.css";
import { getFlights, getAircrafts } from "../api";
import Aircrafts from "./Aircrafts";
import Flights from "./Flights";
import { Grid } from "@material-ui/core";

const layoverTimeSeconds = 20 * 60;

function App() {
  const [aircrafts, setAircrafts] = useState([]);
  const [flights, setFlights] = useState([]);

  const [selectedAircraft, setSelectedAircraft] = useState("");
  const [selectedFlights, setSelectedFlights] = useState([]);

  const [rotation, setRotation] = useState([]);

  const selectFlight = (flight) => {
    selectedFlights.includes(flight)
      ? setSelectedFlights(
          selectedFlights.filter(
            (selectedFlight) => selectedFlight.ident !== flight.ident
          )
        )
      : setSelectedFlights([...selectedFlights, flight]);
  };

  useEffect(() => {
    setAircrafts(getAircrafts());
  }, []);

  useEffect(() => {
    selectedAircraft && setFlights(sortFlightsByTime(getFlights()));
  }, [selectedAircraft]);

  const sortFlightsByTime = (flights) =>
    flights
      .sort((a, b) => a.arrivaltime - b.arrivaltime)
      .sort((a, b) => a.departuretime - b.departuretime);

  // const removeOtherAirports = (flightId) => flights.filter(flight => flight.origin === )

  useEffect(() => {
    const createRotation = () =>
      selectedFlights.map((selectedFlight) =>
        flights.find((flight) => flight.ident === selectedFlight.ident)
      );

    const rotation = createRotation();
    setRotation(rotation);
  }, [flights, selectedFlights]);

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Aircrafts
            aircrafts={aircrafts}
            select={setSelectedAircraft}
            selected={selectedAircraft}
          />
        </Grid>
        <Grid item xs={6}>
          <Flights
            flights={rotation}
            select={selectFlight}
            selected={selectedFlights}
          />
        </Grid>
        <Grid item xs={4}>
          <Flights
            flights={flights}
            select={selectFlight}
            selected={selectedFlights}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
