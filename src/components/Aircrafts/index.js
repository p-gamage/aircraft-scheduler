// FIXME - refactor to re-usable component
import React from "react";
import PropTypes from "prop-types";
import { List, Divider } from "@material-ui/core";
import Aircraft from "./Aircraft";

const Aircrafts = ({ aircrafts, select, selected }) => (
  <List>
    {aircrafts.map((aircraft) => (
      <div key={aircraft.ident}>
        <Aircraft
          aircraft={aircraft}
          selected={selected}
          handleClick={select}
        />
        <Divider />
      </div>
    ))}
  </List>
);

export default Aircrafts;

Aircrafts.propTypes = {
  aircrafts: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};
