import { turnaroundTimeInSeconds, secondsInDay } from "./constants";

export default (selectedFlights) => {
  let sum = 0;

  selectedFlights.forEach((selectedFlight) => {
    sum +=
      selectedFlight.arrivaltime -
      selectedFlight.departuretime +
      turnaroundTimeInSeconds;
  });

  const utilisation = (sum / secondsInDay) * 100;
  return utilisation;
};
