import updateFlights from "../updateFlights";

const flight1 = {
  origin: "DEST",
  departuretime: 16000,
};

const flight2 = {
  origin: "DEST2",
  departuretime: 18000,
};

const flight3 = {
  origin: "DEST2",
  departuretime: 12000,
};

const flight4 = {
  origin: "DEST2",
  departuretime: 15000,
};

const selectedFlight = {
  destination: "DEST2",
  arrivaltime: 14000,
};

test("returns an object with removed and available flights depending on the selected destination", () => {
  const flights = [flight1, flight2];
  const updatedFlights = updateFlights(flights, selectedFlight);

  expect(updatedFlights.available).toEqual([flight2]);
  expect(updatedFlights.removed).toEqual([flight1]);
});

test("removes flights that are earlier than the selected arrival time", () => {
  const flights = [flight1, flight2, flight3];
  const updatedFlights = updateFlights(flights, selectedFlight);

  expect(updatedFlights.available).toEqual([flight2]);
  expect(updatedFlights.removed).toEqual([flight1, flight3]);
});

test("removes flights that departs within the layover time", () => {
  const flights = [flight2, flight4];
  const updatedFlights = updateFlights(flights, selectedFlight);

  expect(updatedFlights.available).toEqual([flight2]);
  expect(updatedFlights.removed).toEqual([flight4]);
});
