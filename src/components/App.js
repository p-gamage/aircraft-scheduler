import React, { useState, useEffect } from "react";
import "./App.css";
import { getFlights, getAircrafts } from "../api";
import Aircrafts from "./Aircrafts";
import Flights from "./Flights";
import Rotation from "./Rotation";
import { Grid, Divider } from "@material-ui/core";
import sortFlightsByTime from "../lib/sortFlightsByTime";
import updateFlights from "../lib/updateFlights";
import computeAircraftUtilisation from "../lib/computeAircraftUtilisation";
import InfoAlert from "./common/InfoAlert";

function App() {
  const [aircrafts, setAircrafts] = useState([]);
  const [flights, setFlights] = useState([]);

  const [selectedAircraft, setSelectedAircraft] = useState("");
  const [selectedFlights, setSelectedFlights] = useState([]);

  const [removedFlights, setRemovedFlights] = useState({});
  const [availableFlights, setAvailableFlights] = useState({});

  const [utilisation, setUtilisation] = useState(0);

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

  useEffect(() => {
    const utilisation = computeAircraftUtilisation(selectedFlights);
    setUtilisation(utilisation);
  }, [selectedFlights]);

  const selectFlightMessage = (
    <Grid container justify="center" spacing={3} alignContent="center">
      <Grid item xs={6}>
        <InfoAlert
          titleText="Select aircraft"
          body="Please select the aircraft from the left to see the flights"
        />
      </Grid>
    </Grid>
  );

  const rotationAndFlights = (
    <>
      <Grid item xs={6}>
        <Rotation
          flights={selectedFlights}
          select={selectFlight}
          selected={selectedFlights}
          selectedAircraft={selectedAircraft}
        />
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs>
        <Flights
          flights={flights}
          select={selectFlight}
          selectedFlights={selectedFlights}
        />
      </Grid>
    </>
  );

  return (
    <div className="App" style={{ margin: "1rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Aircrafts
            aircrafts={aircrafts}
            select={setSelectedAircraft}
            selected={selectedAircraft}
            utilisation={utilisation}
          />
        </Grid>
        <Divider orientation="vertical" flexItem />
        {selectedAircraft ? rotationAndFlights : selectFlightMessage}
      </Grid>
    </div>
  );
}

export default App;
