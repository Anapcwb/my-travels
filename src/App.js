import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <div>
          <Travel
            country="Portugal"
            destination="Lisbon"
            photo="https://images.unsplash.com/photo-1513377888081-794d8e958972?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            distance="1,586.25 km"
          />
        </div>
        <div>
          <Travel
            country="Brazil"
            destination="Curitiba"
            photo="https://images.unsplash.com/photo-1521404945951-3b88e463be35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            distance="10,461.85 km"
          />
        </div>
      </div>
    );
  }
}

export default App;
