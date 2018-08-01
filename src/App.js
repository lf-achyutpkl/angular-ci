import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      schedules: []
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React !!</h1>
        </header>
        <div className="App-intro">
          {this.state.schedules &&
            this.state.schedules.map(schedule => (
              <p key={schedule.subJobId}>{schedule.episode}</p>
            ))}
        </div>
      </div>
    );
  }

  _fetchData = async () => {
    let req = await fetch(
      "http://216.220.193.157:8000/schedule_get?auxjobs=completed"
    );

    let json = await req.json();

    this.setState({ schedules: json.jobs });
  };
}

export default App;
