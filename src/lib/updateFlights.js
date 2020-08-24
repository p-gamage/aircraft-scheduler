import { turnaroundTimeInSeconds } from "./constants";

export default (flights, selectedFlight) => {
  const available = [];
  const removed = [];

  flights.forEach((flight) =>
    flight.origin === selectedFlight.destination &&
    flight.departuretime > selectedFlight.arrivaltime + turnaroundTimeInSeconds
      ? available.push(flight)
      : removed.push(flight)
  );

  return { available, removed };
};
