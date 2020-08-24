import computeAircraftUtilisation from "../computeAircraftUtilisation";
import { turnaroundTimeInSeconds, secondsInDay } from "../constants";

const SixAmInSeconds = 21600;
const ThreePmInSeconds = 54000;
const midnight = secondsInDay;

const flight1 = {
  arrivaltime: ThreePmInSeconds,
  departuretime: SixAmInSeconds,
};

const flight2 = {
  arrivaltime: midnight - turnaroundTimeInSeconds,
  departuretime: flight1.arrivaltime + turnaroundTimeInSeconds,
};

test("computes the utilisation", () => {
  const flights = [flight1, flight2];
  const utilisation = computeAircraftUtilisation(flights);

  expect(utilisation).toEqual(75);
});
