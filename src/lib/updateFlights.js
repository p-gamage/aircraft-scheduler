const layoverTimeSeconds = 20 * 60;

export default (flights, selectedFlight) => {
  const available = [];
  const removed = [];

  flights.forEach((flight) =>
    flight.origin === selectedFlight.destination &&
    flight.departuretime > selectedFlight.arrivaltime + layoverTimeSeconds
      ? available.push(flight)
      : removed.push(flight)
  );

  return { available, removed };
};
