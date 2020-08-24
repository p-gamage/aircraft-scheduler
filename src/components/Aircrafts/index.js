import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Aircraft from "./Aircraft";
import Title from "../common/Title";

const Aircrafts = ({ aircrafts, select, selected, utilisation }) => (
  <>
    <Title text="Aircrafts" />
    <List>
      {aircrafts.map((aircraft) => (
        <Aircraft
          key={aircraft.ident}
          aircraft={aircraft}
          selected={selected}
          handleClick={select}
          utilisation={utilisation}
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
  utilisation: PropTypes.number.isRequired,
};
