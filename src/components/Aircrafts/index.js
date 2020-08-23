// FIXME - refactor to re-usable component
import React from "react";
import PropTypes from "prop-types";
import { List, Typography } from "@material-ui/core";
import Aircraft from "./Aircraft";

const Aircrafts = ({ aircrafts, select, selected }) => (
  <>
    <Typography variant="h5" align="center" children="Aircrafts" />
    <List>
      {aircrafts.map((aircraft) => (
        <Aircraft
          key={aircraft.ident}
          aircraft={aircraft}
          selected={selected}
          handleClick={select}
        />
      ))}
    </List>
  </>
);

export default Aircrafts;

Aircrafts.propTypes = {
  aircrafts: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};
