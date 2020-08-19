import React, { useState, useEffect } from "react";
import "./App.css";
import { getFlights, getAircrafts } from "../api";

function App() {
  const [aircrafts, setAircrafts] = useState([]);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    setAircrafts(getAircrafts());
    setFlights(getFlights());
  }, []);

  return <div className="App"></div>;
}

export default App;
