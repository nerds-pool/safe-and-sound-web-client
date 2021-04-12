import React from "react";
import { Header } from "../lib/components";

const Associates = ({ match }) => {
  return (
    <div>
      <Header />
      <h1>This is Associate Screen</h1>
      <p>User id: {match.params.id}</p>
    </div>
  );
};

export default Associates;
