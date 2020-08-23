import sortFlightsByTime from "../sortFlightsByTime";

const flight1 = {
  arrivaltime: 1800,
  departuretime: 3000,
};

const flight2 = {
  arrivaltime: 1600,
  departuretime: 2000,
};

test("orders by ascending departure time", () => {
  const flight1 = {
    arrivaltime: 1800,
    departuretime: 3000,
  };

  const flight2 = {
    arrivaltime: 1600,
    departuretime: 2000,
  };

  const flights = [flight1, flight2];
  const sortedFlights = sortFlightsByTime(flights);

  expect(sortedFlights).toEqual([flight2, flight1]);
});

test("orders by ascending arrival time if departure times are the same", () => {
  const flight3 = { ...flight1, departuretime: 2000 };
  const flights = [flight3, flight2];
  const sortedFlights = sortFlightsByTime(flights);

  expect(sortedFlights).toEqual([flight2, flight3]);
});
