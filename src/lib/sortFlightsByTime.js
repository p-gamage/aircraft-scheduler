export default (flights) =>
  flights
    .sort((a, b) => a.arrivaltime - b.arrivaltime)
    .sort((a, b) => a.departuretime - b.departuretime);
