import React, { Component } from "react";

import SimpleMap from "./googlemap_react";
import FlatList from "./flat_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLat: 59.95216,
      selectedlng: 10.85124,
    };
  }

  updateMap = (lat, lng) => {
    this.setState({
      selectedLat: lat,
      selectedlng: lng,
    });
  };

  render() {
    const { selectedLat, selectedlng } = this.state;

    return (
      <div className="">
        <FlatList updateMap={this.updateMap} />
        <div className="map-container">
          <SimpleMap lat={selectedLat} lng={selectedlng} />
        </div>
      </div>
    );
  }
}

export default App;
