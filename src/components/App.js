import React, { useState, useEffect } from "react";
import "./App.css";
import { getFlights, getAircrafts } from "../api";
import Aircrafts from "./Aircrafts";
import Flights from "./Flights";

function App() {
  const [aircrafts, setAircrafts] = useState([]);
  const [flights, setFlights] = useState([]);

  const [selectedAircraft, setSelectedAircraft] = useState("");
  const [selectedFlights, setSelectedFlights] = useState([]);

  const selectFlight = (flightId) =>
    setSelectedFlights([...selectedFlights, flightId]);

  useEffect(() => {
    setAircrafts(getAircrafts());
    setFlights(getFlights());
  }, []);

  return (
    <div className="App">
      <Aircrafts
        aircrafts={aircrafts}
        select={setSelectedAircraft}
        selected={selectedAircraft}
      />
      <Flights
        flights={flights}
        select={selectFlight}
        selected={selectedFlights}
      />
    </div>
  );
}

export default App;
