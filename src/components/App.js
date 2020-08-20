import React, { useState, useEffect } from "react";
import "./App.css";
import { getFlights, getAircrafts } from "../api";
import Aircrafts from "./Aircrafts";

function App() {
  const [aircrafts, setAircrafts] = useState([]);
  const [flights, setFlights] = useState([]);

  const [selectedAircraft, setSelectedAircraft] = useState("");
  const [selectedFlights, setSelectedFlights] = useState([]);

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
    </div>
  );
}

export default App;
