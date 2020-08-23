import React, { useState, useEffect } from "react";
import "./App.css";
import { getFlights, getAircrafts } from "../api";
import Aircrafts from "./Aircrafts";
import Flights from "./Flights";
import { Grid } from "@material-ui/core";

function App() {
  const [aircrafts, setAircrafts] = useState([]);
  const [flights, setFlights] = useState([]);

  const [selectedAircraft, setSelectedAircraft] = useState("");
  const [selectedFlights, setSelectedFlights] = useState([]);

  const [rotation, setRotation] = useState([]);

  const selectFlight = (id) => {
    selectedFlights.includes(id)
      ? setSelectedFlights(
          selectedFlights.filter((selectedId) => selectedId !== id)
        )
      : setSelectedFlights([...selectedFlights, id]);
  };

  useEffect(() => {
    setAircrafts(getAircrafts());
    setFlights(getFlights());
  }, []);

  useEffect(() => {
    const createRotation = () =>
      selectedFlights.map((id) =>
        flights.find((flight) => flight.ident === id)
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
