import React from "react";
import PropTypes from "prop-types";
import { secondsInDay, turnaroundTimeInSeconds } from "../lib/constants";
import HSBar from "react-horizontal-stacked-bar-chart";

const Timeline = ({ rotation }) => {
  const data = [];
  const colours = {
    idle: "#DADADA",
    service: "#29E473",
    turnaround: "#9D6BD1",
  };
  const turnaround = {
    value: turnaroundTimeInSeconds,
    color: colours.turnaround,
  };

  rotation.forEach((flight, index) => {
    if (index === 0) {
      data.push({ value: flight.departuretime, color: colours.idle });
    } else {
      const timeBeforeNextFlight =
        flight.departuretime -
        (rotation[index - 1].arrivaltime + turnaroundTimeInSeconds);

      if (timeBeforeNextFlight > 0) {
        data.push({ value: timeBeforeNextFlight, color: colours.idle });
      }
    }

    data.push({
      value: flight.arrivaltime - flight.departuretime,
      color: colours.service,
    });

    if (index !== rotation.length - 1) {
      data.push(turnaround);
    } else {
      data.push({
        value: secondsInDay - flight.arrivaltime,
        color: colours.idle,
      });
    }
  });
  return (
    <div style={{ marginTop: "2rem" }}>
      <HSBar data={data} />
    </div>
  );
};

export default Timeline;

Timeline.propTypes = {
  rotation: PropTypes.arrayOf(Object).isRequired,
};
