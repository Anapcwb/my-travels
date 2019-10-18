import React from "react";

const Travel = props => (
  <section>
    <h1>Country: {props.country}</h1>
    <h2>
      <i>Destination: {props.destination}</i>
    </h2>
    <img src={props.photo} alt={props.destination} />
    <p>Distance from London: {props.distance}</p>
  </section>
);

export default Travel;
