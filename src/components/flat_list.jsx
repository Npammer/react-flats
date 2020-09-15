import React, { Component } from "react";

import flats from "/Users/nikolai/code/Projects/react-flats/data/flats";
import Flat from "./flat";

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList = () => {
    return flats.map((flat) => {
      return (
        <Flat
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          key={flat.name}
          lat={flat.lat}
          lng={flat.lng}
          updateMap={this.props.updateMap}
        />
      );
    });
  };

  render() {
    return <div className="flat-list">{this.renderList()}</div>;
  }
}

export default FlatList;
