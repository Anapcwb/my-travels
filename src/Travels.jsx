import React, { Component } from "react";
import Travel from "./Travel";

const trips = [
  {
    country: "Germany",
    destination: "Stuttgart",
    photo:
      "https://images.unsplash.com/photo-1553448540-fe069f7c95bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    distance: "728.45 km"
  },
  {
    country: "Spain",
    destination: "Barcelona",
    photo:
      "https://images.unsplash.com/photo-1474351622873-3a37a2545060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    distance: "1137.96 km"
  },
  {
    country: "Switzerland",
    destination: "Basel",
    photo:
      "https://images.unsplash.com/photo-1493807394496-2d6d8a70dc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    distance: "707.44 km"
  },
  {
    country: "Ireland",
    destination: "Dublin",
    photo:
      "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80",
    distance: " km"
  },
  {
    country: "Netherland",
    destination: "Amsterdam",
    photo:
      "https://images.unsplash.com/photo-1506804285658-8ec053741713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80",
    distance: "357.29 km"
  }
];

class Travels extends Component {
  state = {};
  render() {
    return trips.map(item => (
      <Travel
        destination={item.destination}
        country={item.country}
        distance={item.distance}
        photo={item.photo}
      />
    ));
  }
}

export default Travels;
