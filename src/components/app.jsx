import React, { Component } from "react";

import SimpleMap from "./googlemap_react";
import FlatList from "./flat_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        <FlatList />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
