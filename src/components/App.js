import React, { useState, useEffect } from "react";
import "./App.css";
import { getFlights, getAircrafts } from "../api";
import Aircrafts from "./Aircrafts";
import Flights from "./Flights";
import { Grid } from "@material-ui/core";
import sortFlightsByTime from "../lib/sortFlightsByTime";
import updateFlights from "../lib/updateFlights";

function App() {
  const [aircrafts, setAircrafts] = useState([]);
  const [flights, setFlights] = useState([]);

  const [selectedAircraft, setSelectedAircraft] = useState("");
  const [selectedFlights, setSelectedFlights] = useState([]);
  const [removedFlights, setRemovedFlights] = useState({});
  const [availableFlights, setAvailableFlights] = useState({});

  const selectFlight = (flight) => {
    if (selectedFlights.includes(flight)) {
      setSelectedFlights(
        selectedFlights.filter(
          (selectedFlight) => selectedFlight.ident !== flight.ident
        )
      );

      let sortedFlights;

      if (selectedFlights.length < 2) {
        sortedFlights = sortFlightsByTime([
          ...availableFlights[flight.ident],
          ...removedFlights[flight.ident],
        ]);
      } else {
        sortedFlights = sortFlightsByTime([
          ...availableFlights[
            selectedFlights[selectedFlights.length - 2].ident
          ],
        ]);
      }

      setFlights(sortedFlights);
    } else {
      setSelectedFlights([...selectedFlights, flight]);

      let flightsToAdd = [];

      if (selectedFlights.length > 0) {
        flightsToAdd =
          removedFlights[selectedFlights[selectedFlights.length - 1].ident];
      }

      const updatedFlights = updateFlights(
        [...flights, ...flightsToAdd],
        flight
      );
      console.log("updatedFlights", updatedFlights);

      setFlights(sortFlightsByTime(updatedFlights.available));

      setAvailableFlights({
        ...availableFlights,
        [flight.ident]: updatedFlights.available,
      });

      setRemovedFlights({
        ...removedFlights,
        [flight.ident]: updatedFlights.removed,
      });
    }
  };

  useEffect(() => {
    setAircrafts(getAircrafts());
  }, []);

  useEffect(() => {
    const sortedFlights = sortFlightsByTime(getFlights());
    selectedAircraft && setFlights(sortedFlights);
  }, [selectedAircraft]);

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
            flights={selectedFlights}
            select={selectFlight}
            selected={selectedFlights}
            rotation
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
